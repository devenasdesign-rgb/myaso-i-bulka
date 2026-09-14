/* =========================================================
   Order payment.
   IMPORTANT: demo mode. No real payment is processed, card
   details never leave the browser and are never stored.
   The single integration point for a payment provider is processPayment().
   ========================================================= */

const ORDER_KEY = 'mb_order';
const RESULT_KEY = 'mb_order_result';

const escapeText = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/* ---------- The single payment-provider integration point ---------- */
function processPayment(order, method) {
  // Замените имитацию ниже на вызов реального провайдера (ЮKassa/CloudPayments/Stripe):
  // fetch('/api/payments', { method: 'POST', body: JSON.stringify({ amount: order.total, ... }) })
  //   .then((r) => r.json()).then((p) => { window.location.href = p.confirmation_url; });
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, method, id: makeOrderNumber() }), 1600);
  });
}

const makeOrderNumber = () => `MB-${String(Math.floor(Math.random() * 9000) + 1000)}`;

/* ---------- Card validation ---------- */

function luhnValid(digits) {
  if (digits.length < 13 || digits.length > 19) return false;
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let d = Number(digits[i]);
    if (double) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
}

function expValid(value) {
  const m = value.match(/^(\d{2})\/(\d{2})$/);
  if (!m) return false;
  const month = Number(m[1]);
  const year = 2000 + Number(m[2]);
  if (month < 1 || month > 12) return false;
  const last = new Date(year, month, 0, 23, 59, 59);
  return last >= new Date();
}

function setError(name, bad) {
  const field = document.querySelector(`[data-field="${name}"]`);
  if (field) field.classList.toggle('has-error', bad);
}

/* ---------- Summary ---------- */

function pickupLabel(key) {
  if (key === 'pickup') return I18N.t('pickup.pickupLabel');
  if (key === 'delivery') return I18N.t('pickup.deliveryLabel');
  return key;
}

function renderSummary(order) {
  const box = document.querySelector('[data-summary-lines]');
  const totalEl = document.querySelector('[data-summary-total]');
  const meta = document.getElementById('order-meta');

  box.innerHTML = order.items
    .map((it) => Cart.resolveLine(it))
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

  totalEl.textContent = formatPrice(order.total);
  meta.innerHTML = `${escapeText(pickupLabel(order.pickup))} · ${escapeText(order.time)}<br>${escapeText(order.name)}, ${escapeText(order.phone)}`;
}

/* ---------- Decorative QR code (demo, encodes nothing) ---------- */

function drawDemoQr(container, seedText) {
  const size = 25;
  let seed = 0;
  for (let i = 0; i < seedText.length; i += 1) seed = (seed * 31 + seedText.charCodeAt(i)) >>> 0;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const inFinder = (x, y) =>
    (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);

  let cells = '';
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (inFinder(x, y)) continue;
      if (rand() > 0.54) cells += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    }
  }

  const finder = (ox, oy) =>
    `<rect x="${ox}" y="${oy}" width="7" height="7" fill="none" stroke="#0d0b0a" stroke-width="1"/>` +
    `<rect x="${ox + 2}" y="${oy + 2}" width="3" height="3"/>`;

  container.innerHTML = `<svg viewBox="0 0 ${size} ${size}" fill="#0d0b0a" shape-rendering="crispEdges" role="img" aria-label="${escapeText(I18N.t('payment.qrAria'))}">
      ${cells}${finder(0, 0)}${finder(size - 7, 0)}${finder(0, size - 7)}
    </svg>`;
}

/* ---------- Init ---------- */

(function initPayment() {
  let order = null;
  try {
    order = JSON.parse(localStorage.getItem(ORDER_KEY) || 'null');
  } catch (err) {
    order = null;
  }

  const empty = document.getElementById('empty-state');
  const root = document.getElementById('payment-root');

  if (!order || !order.items || !order.items.length) {
    empty.hidden = false;
    return;
  }
  root.hidden = false;
  renderSummary(order);

  /* --- Payment method switching --- */
  const blocks = {
    card: document.getElementById('block-card'),
    qr: document.getElementById('block-qr'),
    cash: document.getElementById('block-cash')
  };
  const payBtn = document.getElementById('pay-btn');
  const qrText = document.getElementById('qr-text');
  let method = 'card';
  let isProcessing = false;

  function payBtnLabel(m) {
    if (m === 'card') return I18N.t('payment.payBtnCard', { sum: formatPrice(order.total) });
    if (m === 'qr') return I18N.t('payment.payBtnQr');
    return I18N.t('payment.payBtnCash');
  }

  function renderQrText() {
    if (qrText) qrText.textContent = I18N.t('payment.qrInstructions', { sum: formatPrice(order.total) });
  }

  function selectMethod(next) {
    method = next;
    Object.entries(blocks).forEach(([key, el]) => {
      el.classList.toggle('is-visible', key === next);
    });
    if (!isProcessing) payBtn.textContent = payBtnLabel(next);
  }

  document.querySelectorAll('input[name="method"]').forEach((radio) =>
    radio.addEventListener('change', () => selectMethod(radio.value))
  );
  selectMethod('card');

  drawDemoQr(document.getElementById('qr-frame'), `${order.total}-${order.time}`);
  renderQrText();

  /* --- Card fields --- */
  const number = document.getElementById('card-number');
  const holder = document.getElementById('card-holder');
  const exp = document.getElementById('card-exp');
  const cvc = document.getElementById('card-cvc');

  const previewNumber = document.getElementById('card-preview-number');
  const previewHolder = document.getElementById('card-preview-holder');
  const previewExp = document.getElementById('card-preview-exp');

  previewHolder.textContent = holder.value || I18N.t('payment.cardPreviewHolderPlaceholder');
  previewExp.textContent = exp.value || I18N.t('payment.cardPreviewExpPlaceholder');

  document.addEventListener('langchange', () => {
    renderSummary(order);
    if (!isProcessing) payBtn.textContent = payBtnLabel(method);
    renderQrText();
    if (!holder.value) previewHolder.textContent = I18N.t('payment.cardPreviewHolderPlaceholder');
    if (!exp.value) previewExp.textContent = I18N.t('payment.cardPreviewExpPlaceholder');
  });

  number.addEventListener('input', () => {
    const digits = number.value.replace(/\D/g, '').slice(0, 19);
    number.value = digits.replace(/(.{4})/g, '$1 ').trim();
    previewNumber.textContent = (digits.replace(/(.{4})/g, '$1 ').trim() + ' •••• •••• •••• ••••').slice(0, 23);
    setError('number', false);
  });

  holder.addEventListener('input', () => {
    holder.value = holder.value.replace(/[^a-zA-Z\s'-]/g, '').toUpperCase();
    previewHolder.textContent = holder.value || I18N.t('payment.cardPreviewHolderPlaceholder');
    setError('holder', false);
  });

  exp.addEventListener('input', () => {
    const digits = exp.value.replace(/\D/g, '').slice(0, 4);
    exp.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    previewExp.textContent = exp.value || I18N.t('payment.cardPreviewExpPlaceholder');
    setError('exp', false);
  });

  cvc.addEventListener('input', () => {
    cvc.value = cvc.value.replace(/\D/g, '').slice(0, 4);
    setError('cvc', false);
  });

  function validateCard() {
    const errors = {
      number: !luhnValid(number.value.replace(/\D/g, '')),
      holder: holder.value.trim().length < 3,
      exp: !expValid(exp.value),
      cvc: !/^\d{3,4}$/.test(cvc.value)
    };
    Object.entries(errors).forEach(([key, bad]) => setError(key, bad));
    return !Object.values(errors).some(Boolean);
  }

  [number, holder, exp, cvc].forEach((input) => input.addEventListener('blur', () => validateCard()));

  /* --- Payment --- */
  payBtn.addEventListener('click', async () => {
    if (method === 'card' && !validateCard()) {
      document.querySelector('.has-error .input')?.focus();
      return;
    }

    isProcessing = true;
    payBtn.classList.add('is-loading');
    payBtn.innerHTML = `<span class="spinner"></span> ${escapeText(I18N.t('payment.processing'))}`;

    const result = await processPayment(order, method);

    try {
      localStorage.setItem(
        RESULT_KEY,
        JSON.stringify({
          number: result.id,
          paidAt: new Date().toISOString(),
          methodKey: method,
          paid: method !== 'cash',
          order
        })
      );
      localStorage.removeItem(ORDER_KEY);
    } catch (err) {
      /* private mode */
    }

    Cart.clear();
    window.location.href = 'success.html';
  });
})();
