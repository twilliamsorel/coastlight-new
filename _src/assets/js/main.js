import { mainMenuScrolling, toggleMobileMenu } from './mainMenus.js';
import sliderAnimator from './slider.js';
import sidebar from './sidebar.js';
import gallery from './gallery.js';
import { formSlider, submitSliderForm } from './formSlider.js';
import selectBoxes from './selectBoxes.js';
import { sendForm } from './utils.js';

// INITIALIZING MAIN NAVIGATION JS
mainMenuScrolling();
toggleMobileMenu();
selectBoxes();

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
  submitSliderForm();
}

if (window.location.pathname.match('/company/contact/$')) {
  sendForm();
}