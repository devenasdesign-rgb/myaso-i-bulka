/* =========================================================
   MYASO & BULKA — landing page: menu accordion, cart, navigation
   ========================================================= */

const SECTION_ICONS = {
  burgers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5a8 8 0 0 1 16 0Z"/><path d="M3.5 14h17"/><path d="M5 17.5h14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/></svg>',
  sides: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v4M10 4v4M14 4v4M6 8h12l-1.5 12h-9Z"/></svg>',
  sauces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l1 4H7Z"/><path d="M6 7h12l-1.2 11a3 3 0 0 1-3 2.8H10.2a3 3 0 0 1-3-2.8Z"/></svg>',
  drinks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M16 10h2.5a2.5 2.5 0 0 1 0 5H16"/><path d="M7 4.5v1.5M11 4v2"/></svg>'
};

const ICON_PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
const ICON_CHEVRON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/* ---------- Menu rendering ---------- */

function dishMarkup(item) {
  const name = menuText(item, 'name');
  const compList = menuText(item, 'comp');
  const comp = compList ? compList.join(' · ') : '';
  const mark = menuText(item, 'mark');

  return `
    <article class="dish" data-dish="${escapeHtml(item.id)}">
      <div class="dish__media">
        <img src="${escapeHtml(item.img)}" alt="${escapeHtml(name)}" loading="lazy" width="760" height="506">
        ${mark ? `<span class="dish__mark">${escapeHtml(mark)}</span>` : ''}
      </div>
      <div class="dish__body">
        <h3 class="dish__name">${escapeHtml(name)}</h3>
        ${comp ? `<p class="dish__comp">${escapeHtml(comp)}</p>` : ''}
        <div class="dish__foot">
          <div class="dish__price" data-price-view>${formatPrice(item.price)}</div>
          <div data-control></div>
        </div>
      </div>
    </article>`;
}

let dishUnsubs = [];

function renderMenu() {
  const root = document.getElementById('menu-groups');
  if (!root) return;

  const openIndex = [...root.querySelectorAll('[data-group]')].findIndex((g) => g.classList.contains('is-open'));
  const activeIndex = openIndex > -1 ? openIndex : 0;

  dishUnsubs.forEach((unsub) => unsub());
  dishUnsubs = [];

  root.innerHTML = MENU.map(
    (section, index) => `
    <section class="mgroup${index === activeIndex ? ' is-open' : ''}" data-group>
      <button class="mgroup__head" type="button" aria-expanded="${index === activeIndex}" aria-controls="panel-${section.id}">
        <span class="mgroup__icon">${SECTION_ICONS[section.id] || ''}</span>
        <span class="mgroup__titles">
          <span class="mgroup__title">${escapeHtml(menuText(section, 'title'))}</span>
          <span class="mgroup__sub">${escapeHtml(menuText(section, 'subtitle'))}</span>
        </span>
        <span class="mgroup__count">${itemsCountLabel(section.items.length)}</span>
        <span class="mgroup__chev">${ICON_CHEVRON}</span>
      </button>
      <div class="mgroup__panel" id="panel-${section.id}">
        <div><div class="mgrid">${section.items.map(dishMarkup).join('')}</div></div>
      </div>
    </section>`
  ).join('');

  const groups = [...root.querySelectorAll('[data-group]')];
  groups.forEach((group) => {
    const head = group.querySelector('.mgroup__head');
    head.addEventListener('click', () => {
      const willOpen = !group.classList.contains('is-open');
      groups.forEach((other) => {
        if (other !== group) {
          other.classList.remove('is-open');
          other.querySelector('.mgroup__head').setAttribute('aria-expanded', 'false');
        }
      });
      group.classList.toggle('is-open', willOpen);
      head.setAttribute('aria-expanded', String(willOpen));
    });
  });

  root.querySelectorAll('[data-dish]').forEach(setupDish);
}

/* ---------- A single dish card ---------- */

function setupDish(card) {
  const item = MENU_INDEX[card.dataset.dish];
  if (!item) return;

  const control = card.querySelector('[data-control]');

  function renderControl() {
    const qty = Cart.getQty(item.id);
    if (!qty) {
      control.innerHTML = `<button class="dish__add" type="button" data-add>${ICON_PLUS} ${I18N.t('dish.addBtn')}</button>`;
      control.querySelector('[data-add]').addEventListener('click', () => {
        Cart.add({ id: item.id, name: item.name, price: item.price, img: item.img });
      });
    } else {
      control.innerHTML = `
        <div class="stepper">
          <button type="button" data-minus aria-label="${escapeHtml(I18N.t('dish.decreaseAria'))}">−</button>
          <output>${qty}</output>
          <button type="button" data-plus aria-label="${escapeHtml(I18N.t('dish.increaseAria'))}">+</button>
        </div>`;
      control.querySelector('[data-minus]').addEventListener('click', () => Cart.setQty(item.id, Cart.getQty(item.id) - 1));
      control.querySelector('[data-plus]').addEventListener('click', () => Cart.setQty(item.id, Cart.getQty(item.id) + 1));
    }
  }

  const unsub = Cart.subscribe(renderControl);
  dishUnsubs.push(unsub);
}

/* ---------- Cart drawer ---------- */

function renderDrawer() {
  const box = document.querySelector('[data-cart-lines]');
  const totalEl = document.querySelector('[data-cart-total]');
  const checkout = document.querySelector('[data-cart-checkout]');
  if (!box) return;

  const items = Cart.getItems().map((it) => Cart.resolveLine(it));
  if (!items.length) {
    box.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.6 8.4a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L5.5 4H3"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        ${escapeHtml(I18N.t('drawer.emptyText'))}
      </div>`;
  } else {
    box.innerHTML = items
      .map(
        (it) => `
        <div class="cart-line" data-key="${escapeHtml(it.key)}">
          <img class="cart-line__img" src="${escapeHtml(it.img)}" alt="" loading="lazy">
          <div>
            <div class="cart-line__name">${escapeHtml(it.name)}</div>
            <div class="cart-line__price">${formatPrice(it.price * it.qty)}</div>
          </div>
          <div class="cart-line__side">
            <div class="stepper">
              <button type="button" data-dec aria-label="${escapeHtml(I18N.t('drawer.decreaseAria'))}">−</button>
              <output>${it.qty}</output>
              <button type="button" data-inc aria-label="${escapeHtml(I18N.t('drawer.increaseAria'))}">+</button>
            </div>
            <button class="cart-line__remove" type="button" data-del>${escapeHtml(I18N.t('drawer.remove'))}</button>
          </div>
        </div>`
      )
      .join('');

    box.querySelectorAll('.cart-line').forEach((line) => {
      const key = line.dataset.key;
      const qty = () => (Cart.getItems().find((it) => it.key === key) || {}).qty || 0;
      line.querySelector('[data-dec]').addEventListener('click', () => Cart.setQty(key, qty() - 1));
      line.querySelector('[data-inc]').addEventListener('click', () => Cart.setQty(key, qty() + 1));
      line.querySelector('[data-del]').addEventListener('click', () => Cart.remove(key));
    });
  }

  if (totalEl) totalEl.textContent = formatPrice(Cart.total());
  if (checkout) checkout.classList.toggle('btn--disabled', !items.length);
  if (checkout) checkout.toggleAttribute('disabled', !items.length);
}

function bindDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;

  const open = () => {
    document.body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    document.body.classList.remove('drawer-open');
    drawer.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('[data-cart-open]').forEach((btn) => btn.addEventListener('click', open));
  document.querySelectorAll('[data-cart-close]').forEach((btn) => btn.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  Cart.subscribe(renderDrawer);
  document.addEventListener('langchange', renderDrawer);
}

/* ---------- Navigation, reveal ---------- */

function bindChrome() {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');

  if (header) {
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  }
}

/* ---------- Init ---------- */
renderMenu();
bindDrawer();
bindCartIndicators();
bindChrome();
document.addEventListener('langchange', renderMenu);
