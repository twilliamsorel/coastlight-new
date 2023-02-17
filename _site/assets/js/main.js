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

// MAIN MENU SCROLLING FUNCTIONALITY
(function () {
  let menu = document.querySelector('#main-nav');

  let triggerNav = function () {
    if (window.scrollY > 0 && !menu.classList.contains('scrolled')) {
      menu.classList.add('scrolled');
    } else if (window.scrollY <= 0) {
      menu.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', triggerNav);
  window.addEventListener('load', triggerNav);
}());