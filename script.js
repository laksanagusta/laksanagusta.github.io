(() => {
  const trigger = document.querySelector('[data-contact-trigger]');
  const dialog = document.querySelector('#contact-options');

  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

  const closeButton = dialog.querySelector('[data-contact-close]');
  const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let closeTimer;

  const finishClose = () => {
    window.clearTimeout(closeTimer);
    dialog.close();
    dialog.classList.remove('is-closing', 'is-visible');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  };

  const closeDialog = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    dialog.classList.remove('is-visible');
    dialog.classList.add('is-closing');
    closeTimer = window.setTimeout(finishClose, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    window.clearTimeout(closeTimer);
    dialog.showModal();
    trigger.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      dialog.classList.add('is-visible');
      closeButton?.focus();
    });
  });

  closeButton?.addEventListener('click', closeDialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDialog();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll(focusableSelector)].filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
