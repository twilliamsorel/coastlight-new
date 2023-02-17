// MOBILE MENU TOGGLE FUNCTIONALITY
(function () {
  let mobileButtons = Array.from(document.querySelectorAll('[data-tag="mobile-toggle"]'));
  let mobileNav = document.querySelector('#mobile-nav');

  mobileButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
      document.body.classList.toggle('noscroll');
    });
  });
}());