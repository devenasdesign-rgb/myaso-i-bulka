/* =========================================================
   Checkout: phone mask, time slots, validation.
   Result is stored in localStorage.mb_order and passed to payment.html
   ========================================================= */

const ORDER_KEY = 'mb_order';
const WORK_HOURS = { open: 12, close: 23 }; // extended Fri/Sat below
const DAY_NAMES = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const MONTH_NAMES = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

/* ---------- Order summary ---------- */

function renderSummary() {
  const box = document.querySelector('[data-summary-lines]');
  const totalEl = document.querySelector('[data-summary-total]');
  if (!box) return;

  box.innerHTML = Cart.getItems()
    .map(
      (it) => `
      <div class="summary__line">
        <div>
          <div class="summary__name">${escapeText(it.name)}</div>
          <div class="summary__meta">${it.qty} × ${formatPrice(it.price)}</div>
        </div>
        <div class="summary__cost">${formatPrice(it.price * it.qty)}</div>
      </div>`
    )
    .join('');

  if (totalEl) totalEl.textContent = formatPrice(Cart.total());
}

const escapeText = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/* ---------- Phone mask ---------- */

function bindPhoneMask(input) {
  const format = (digits) => {
    let body = digits;
    if (body.startsWith('8')) body = '7' + body.slice(1);
    if (!body.startsWith('7')) body = '7' + body;
    body = body.slice(0, 11);
    const rest = body.slice(1);
    let out = '+7';
    if (rest.length) out += ` (${rest.slice(0, 3)}`;
    if (rest.length >= 3) out += ')';
    if (rest.length > 3) out += ` ${rest.slice(3, 6)}`;
    if (rest.length > 6) out += `-${rest.slice(6, 8)}`;
    if (rest.length > 8) out += `-${rest.slice(8, 10)}`;
    return out;
  };

  const apply = () => {
    const digits = input.value.replace(/\D/g, '');
    input.value = digits ? format(digits) : '';
  };

  input.addEventListener('focus', () => {
    if (!input.value) input.value = '+7 (';
  });
  input.addEventListener('input', apply);
  input.addEventListener('blur', () => {
    if (input.value.replace(/\D/g, '').length <= 1) input.value = '';
  });
}

const phoneDigits = (value) => value.replace(/\D/g, '');

/* ---------- Time slots ---------- */

function closeHourFor(day) {
  // Пт-Сб до полуночи, остальные дни до 23:00
  return day === 5 || day === 6 ? 24 : WORK_HOURS.close;
}

function buildTimeSlots(select) {
  const now = new Date();
  const options = [];

  for (let offset = 0; offset < 3 && options.length === 0; offset += 1) {
    const day = new Date(now);
    day.setDate(now.getDate() + offset);

    let start = new Date(day);
    start.setHours(WORK_HOURS.open, 0, 0, 0);
    if (offset === 0) {
      const earliest = new Date(now.getTime() + 30 * 60 * 1000);
      if (earliest > start) {
        start = earliest;
        start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15, 0, 0);
      }
    }

    const closeHour = closeHourFor(day.getDay());
    const end = new Date(day);
    if (closeHour >= 24) {
      end.setDate(end.getDate() + 1);
      end.setHours(0, 0, 0, 0);
    } else {
      end.setHours(closeHour, 0, 0, 0);
    }

    for (let t = new Date(start); t <= end; t = new Date(t.getTime() + 15 * 60 * 1000)) {
      const hhmm = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
      const label = offset === 0 ? `Сегодня, ${hhmm}` : `${DAY_NAMES[day.getDay()]}, ${MONTH_NAMES[day.getMonth()]} ${day.getDate()} — ${hhmm}`;
      options.push({ value: label, label });
    }
  }

  select.innerHTML =
    '<option value="">Выберите время</option>' +
    options.map((o) => `<option value="${escapeText(o.value)}">${escapeText(o.label)}</option>`).join('');

  if (options.length) select.value = options[0].value;
}

/* ---------- Validation ---------- */

function setError(name, hasError) {
  const field = document.querySelector(`[data-field="${name}"]`);
  if (field) field.classList.toggle('has-error', hasError);
}

function validate(form) {
  const name = form.name.value.trim();
  const phone = phoneDigits(form.phone.value);
  const time = form.time.value;

  const errors = {
    name: name.length < 2,
    phone: phone.length !== 11,
    time: !time
  };

  Object.entries(errors).forEach(([key, bad]) => setError(key, bad));
  return !Object.values(errors).some(Boolean);
}

/* ---------- Init ---------- */

(function initCheckout() {
  const empty = document.getElementById('empty-state');
  const root = document.getElementById('checkout-root');
  const form = document.getElementById('checkout-form');

  bindCartIndicators();

  if (!Cart.count()) {
    empty.hidden = false;
    return;
  }
  root.hidden = false;

  renderSummary();
  Cart.subscribe(renderSummary);
  bindPhoneMask(form.phone);
  buildTimeSlots(form.time);

  ['name', 'phone', 'time'].forEach((key) => {
    form[key].addEventListener('blur', () => validate(form));
    form[key].addEventListener('input', () => setError(key, false));
    form[key].addEventListener('change', () => setError(key, false));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(form)) {
      form.querySelector('.has-error .input, .has-error .select')?.focus();
      return;
    }

    const order = {
      createdAt: new Date().toISOString(),
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      pickup: form.querySelector('input[name="pickup"]:checked').value,
      time: form.time.value,
      comment: form.comment.value.trim(),
      items: Cart.getItems(),
      total: Cart.total()
    };

    try {
      localStorage.setItem(ORDER_KEY, JSON.stringify(order));
    } catch (err) {
      /* private mode */
    }
    window.location.href = 'payment.html';
  });
})();
