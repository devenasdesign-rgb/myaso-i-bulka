/* =========================================================
   MYASO & BULKA cart
   State lives in localStorage and is shared across all pages.
   Line item: { key, id, name, price, qty, img }
   ========================================================= */

const Cart = (() => {
  const STORAGE_KEY = 'mb_cart';
  const listeners = [];
  let items = read();

  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(raw)) return [];
      return raw.filter((it) => it && it.id && Number.isFinite(it.price) && it.qty > 0);
    } catch (err) {
      return [];
    }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      /* private mode — carry on without persisting */
    }
    listeners.forEach((fn) => fn(items));
  }

  function add(item, qty = 1) {
    const found = items.find((it) => it.key === item.id);
    if (found) {
      found.qty += qty;
    } else {
      items.push({ key: item.id, id: item.id, name: item.name, price: item.price, qty, img: item.img || '' });
    }
    persist();
  }

  function setQty(key, qty) {
    const found = items.find((it) => it.key === key);
    if (!found) return;
    if (qty <= 0) {
      items = items.filter((it) => it.key !== key);
    } else {
      found.qty = qty;
    }
    persist();
  }

  const remove = (key) => setQty(key, 0);

  function clear() {
    items = [];
    persist();
  }

  const getItems = () => items.map((it) => ({ ...it }));
  const getQty = (id) => (items.find((it) => it.key === id) || {}).qty || 0;
  const count = () => items.reduce((sum, it) => sum + it.qty, 0);
  const total = () => items.reduce((sum, it) => sum + it.price * it.qty, 0);

  /* Re-derive the displayed name from MENU_INDEX + the current language
     at render time, instead of trusting the name baked into the stored
     line at add-to-cart time — so switching languages updates cart,
     checkout, payment and success line items without a reload. */
  function resolveLine(it) {
    const menuItem = (typeof MENU_INDEX !== 'undefined') ? MENU_INDEX[it.id] : null;
    const name = menuItem ? menuText(menuItem, 'name') : it.name;
    return { ...it, name: name || it.name };
  }

  function subscribe(fn) {
    listeners.push(fn);
    fn(items);
    return () => {
      const i = listeners.indexOf(fn);
      if (i > -1) listeners.splice(i, 1);
    };
  }

  return { add, setQty, remove, clear, getItems, getQty, count, total, subscribe, resolveLine };
})();

/* ---------- Shared helpers ---------- */

const formatPrice = (value) => `${Math.round(value).toLocaleString('ru-RU')} ₽`;

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

/* Language-aware "N items" label used in the sticky cart bar and the
   menu accordion group headers. */
function itemsCountLabel(n) {
  if (typeof I18N !== 'undefined' && I18N.getLang && I18N.getLang() === 'en') {
    return `${n} ${n === 1 ? 'item' : 'items'}`;
  }
  return `${n} ${plural(n, 'позиция', 'позиции', 'позиций')}`;
}

/* Cart icon in the header + sticky bar — present on every page */
function bindCartIndicators() {
  const counters = document.querySelectorAll('[data-cart-count]');
  const bar = document.querySelector('[data-cart-bar]');
  const barCount = document.querySelector('[data-cart-bar-count]');
  const barTotal = document.querySelector('[data-cart-bar-total]');

  Cart.subscribe(() => {
    const n = Cart.count();
    counters.forEach((el) => {
      el.textContent = n ? String(n) : '';
      el.dataset.empty = n ? 'false' : 'true';
    });
    if (bar) {
      bar.classList.toggle('is-visible', n > 0);
      if (barCount) barCount.textContent = itemsCountLabel(n);
      if (barTotal) barTotal.textContent = formatPrice(Cart.total());
    }
  });
  document.addEventListener('langchange', () => {
    const n = Cart.count();
    if (bar && barCount) barCount.textContent = itemsCountLabel(n);
  });
}
