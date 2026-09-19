/* =========================================================
   Concept disclaimer: modal on first open (once per session)
   plus a permanent note at the bottom of every page.
   Depends on i18n.js (I18N) being loaded first.
   ========================================================= */
(function () {
  const SEEN_KEY = 'mb_concept_seen';

  function wasSeen() {
    try {
      return sessionStorage.getItem(SEEN_KEY) === '1';
    } catch (err) {
      return false;
    }
  }

  function markSeen() {
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch (err) {
      /* private mode — carry on */
    }
  }

  function addNote() {
    const note = document.createElement('div');
    note.className = 'concept-note';
    note.setAttribute('data-i18n', 'concept.note');
    document.body.appendChild(note);
    I18N.translatePage(note);
  }

  function openModal() {
    const modal = document.createElement('div');
    modal.className = 'concept-modal';
    modal.id = 'concept-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'concept-title');
    modal.innerHTML = `
      <div class="concept-modal__card">
        <div class="concept-modal__top">
          <span class="concept-modal__badge" data-i18n="concept.badge"></span>
          <button class="lang-switch" data-lang-switch type="button"></button>
        </div>
        <h2 class="concept-modal__title" id="concept-title" data-i18n="concept.title"></h2>
        <p class="concept-modal__text" data-i18n="concept.text1"></p>
        <p class="concept-modal__text" data-i18n="concept.text2"></p>
        <div class="concept-modal__by"><span data-i18n="concept.by"></span> <a href="https://devenasdesign.com/" target="_blank" rel="noopener noreferrer">DEVENAS design</a></div>
        <button class="btn btn--primary concept-modal__btn" type="button" data-i18n="concept.cta"></button>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.classList.add('concept-open');

    I18N.translatePage(modal);
    I18N.renderLangSwitchButtons();
    I18N.bindLangSwitchButtons();

    const closeBtn = modal.querySelector('.concept-modal__btn');

    function close() {
      markSeen();
      document.body.classList.remove('concept-open');
      document.removeEventListener('keydown', onKey);
      modal.classList.add('is-closing');
      setTimeout(() => modal.remove(), 250);
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', onKey);
    closeBtn.focus();
  }

  addNote();
  if (!wasSeen()) openModal();
})();
