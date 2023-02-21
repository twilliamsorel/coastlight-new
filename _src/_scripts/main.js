const { recurseDom } = require('./utils');

// MOBILE MENU TOGGLE FUNCTIONALITY
(function () {
  let mobileButtons = Array.from(document.querySelectorAll('[data-tag="mobile-toggle"]'));
  let mobileNav = document.querySelector('#mobile-nav');

  let toggleNav = () => {
    mobileNav.classList.toggle('hidden');
    document.body.classList.toggle('noscroll');
  };

  window.addEventListener('click', function (e) {
    if (document.body.classList.contains('noscroll') && !e.target.getAttribute('data-tag')) {
      let menuClick = recurseDOM(e.target, mobileNav);

      if (!menuClick) {
        toggleNav();
      }
    }

    if (e.target.getAttribute('data-tag') === 'mobile-toggle') {
      toggleNav();
    }
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