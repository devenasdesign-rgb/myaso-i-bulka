/* =========================================================
   "Заказ принят"
   ========================================================= */

const RESULT_KEY = 'mb_order_result';
const PICKUP_LABEL = { pickup: 'Самовывоз', delivery: 'Доставка' };

const escapeText = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

(function initSuccess() {
  let result = null;
  try {
    result = JSON.parse(localStorage.getItem(RESULT_KEY) || 'null');
  } catch (err) {
    result = null;
  }

  const empty = document.getElementById('empty-state');
  const root = document.getElementById('success-root');

  if (!result || !result.order) {
    empty.hidden = false;
    return;
  }
  root.hidden = false;

  const { order } = result;

  document.getElementById('success-sub').textContent = result.paid
    ? `Оплата получена, заказ уже готовится. Ждём вас — ${order.time}.`
    : `Заказ передан на кухню. Оплатите на месте, когда придёте — ${order.time}.`;

  document.getElementById('success-number').textContent = `Заказ № ${result.number}`;

  const facts = [
    ['Имя', `${order.name}, ${order.phone}`],
    ['Получение', PICKUP_LABEL[order.pickup] || order.pickup],
    ['Время', order.time],
    ['Оплата', result.method]
  ];
  if (order.comment) facts.push(['Комментарий', order.comment]);
  facts.push(['Адрес', 'Екатеринбург, ул. Розы Люксембург, 67']);

  document.getElementById('success-facts').innerHTML = facts
    .map(
      ([label, value]) => `
      <div class="success__fact">
        <div class="success__fact-label">${escapeText(label)}</div>
        <div class="success__fact-value">${escapeText(value)}</div>
      </div>`
    )
    .join('');

  document.querySelector('[data-summary-lines]').innerHTML = order.items
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

  document.querySelector('[data-summary-total]').textContent = formatPrice(order.total);
})();
