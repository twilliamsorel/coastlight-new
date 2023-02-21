(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./utils":2}],2:[function(require,module,exports){
module.exports = recurseDOM = (e, target) => {
  if (e === target) {
    return true;
  } else if (e.tagName == 'BODY') {
    return false;
  } else {
    return recurseDOM(e.parentElement, target);
  }
};
},{}]},{},[1]);
