import mainMenuScrolling, { toggleMobileMenu } from './mainMenus.js';
import sliderAnimator from './slider.js';
import sidebar from './sidebar.js';
import gallery from './gallery.js';
import formSlider from './formSlider.js';

// INITIALIZING MAIN NAVIGATION JS
mainMenuScrolling();
toggleMobileMenu();

if (window.location.pathname.match('/web-design/$')) {
  sliderAnimator();
}

if (window.location.pathname.match('/web-design/process/$')) {
  sidebar();
}

if (window.location.pathname.match('/portfolio/[0-9a-z-]+/$')) {
  gallery();
}

if (window.location.pathname.match('/get-a-quote/$')) {
  formSlider();
}
