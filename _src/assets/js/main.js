import mainMenuScrolling, { toggleMobileMenu } from './mainMenus.js';
import sliderAnimator from './slider.js'

// INITIALIZING MAIN NAVIGATION JS
mainMenuScrolling();
toggleMobileMenu();

if (window.location.pathname.match('/web-design/$')) {
  sliderAnimator();
}