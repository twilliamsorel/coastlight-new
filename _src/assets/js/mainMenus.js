import recurseDom from './utils.js';

// MOBILE MENU TOGGLE FUNCTIONALITY
export function toggleMobileMenu(recurseDOM) {
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
} (recurseDom);

// MAIN MENU SCROLLING FUNCTIONALITY
export default function mainMenuScrolling() {
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
};