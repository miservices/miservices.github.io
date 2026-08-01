/* ============================================================
   confirm-nav.js — shows an "Are you sure?" modal before
   following any <a class="confirm-link" href="..."> link.

   Useful on pages with dense, clickable content (like an
   org-chart or directory) where it's easy to accidentally click
   a link meant to open a whole other site/section while trying
   to expand a section instead.

   Usage:
     <a class="confirm-link" href="/somewhere/">Somewhere</a>
     ...
     <script src="/confirm-nav.js"></script>
   ============================================================ */

(function () {
  var pendingHref = null;

  function ensureModal() {
    if (document.getElementById('confirm-nav-overlay')) return;

    var overlay = document.createElement('div');
    overlay.id = 'confirm-nav-overlay';
    overlay.className = 'confirm-modal-overlay';
    overlay.innerHTML =
      '<div class="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">' +
        '<div class="confirm-modal-icon">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>' +
        '</div>' +
        '<h2 id="confirm-modal-title">Leave this page?</h2>' +
        '<p id="confirm-modal-desc">You\'re about to go to <strong id="confirm-modal-dest"></strong>.</p>' +
        '<div class="confirm-modal-actions">' +
          '<button type="button" class="confirm-modal-cancel">Stay here</button>' +
          '<button type="button" class="confirm-modal-continue">Continue</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    overlay.querySelector('.confirm-modal-cancel').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal(href) {
    ensureModal();
    pendingHref = href;

    var overlay = document.getElementById('confirm-nav-overlay');
    overlay.querySelector('#confirm-modal-dest').textContent = href;
    overlay.classList.add('open');

    var continueBtn = overlay.querySelector('.confirm-modal-continue');
    continueBtn.onclick = function () {
      window.location.href = pendingHref;
    };

    // Move focus into the modal for keyboard/screen-reader users.
    overlay.querySelector('.confirm-modal-cancel').focus();
  }

  function closeModal() {
    var overlay = document.getElementById('confirm-nav-overlay');
    if (overlay) overlay.classList.remove('open');
    pendingHref = null;
  }

  function attach() {
    document.querySelectorAll('a.confirm-link:not([data-confirm-bound])').forEach(function (link) {
      link.setAttribute('data-confirm-bound', '1');
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(link.getAttribute('href'));
      });
    });
  }

  // Exposed so pages that render confirm-link elements dynamically
  // (after a fetch, a filter change, etc.) can re-scan for new ones,
  // and so pages can trigger the same confirmation programmatically
  // (e.g. a search box that computes a destination on submit).
  window.confirmNav = { attach: attach, go: openModal };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();