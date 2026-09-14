/* =========================================================
   "Заказ принят"
   ========================================================= */

const RESULT_KEY = 'mb_order_result';

const escapeText = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

function pickupLabel(key) {
  if (key === 'pickup') return I18N.t('pickup.pickupLabel');
  if (key === 'delivery') return I18N.t('pickup.deliveryLabel');
  return key;
}

function paymentMethodLabel(key) {
  if (key === 'card') return I18N.t('payment.methodCard');
  if (key === 'qr') return I18N.t('payment.methodQr');
  if (key === 'cash') return I18N.t('payment.methodCash');
  return key;
}

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
  const methodKey = result.methodKey || result.method; // methodKey is the new format

  function render() {
    document.getElementById('success-sub').textContent = I18N.t(
      result.paid ? 'success.subPaid' : 'success.subUnpaid',
      { time: order.time }
    );

    document.getElementById('success-number').textContent = I18N.t('success.orderNumber', { num: result.number });

    const facts = [
      [I18N.t('success.factName'), `${order.name}, ${order.phone}`],
      [I18N.t('success.factPickup'), pickupLabel(order.pickup)],
      [I18N.t('success.factTime'), order.time],
      [I18N.t('success.factPayment'), paymentMethodLabel(methodKey)]
    ];
    if (order.comment) facts.push([I18N.t('success.factComment'), order.comment]);
    facts.push([I18N.t('success.factAddress'), I18N.t('success.addressValue')]);

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

    document.querySelector('[data-summary-total]').textContent = formatPrice(order.total);
  }

  render();
  document.addEventListener('langchange', render);
})();
