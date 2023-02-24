export default function sidebar() {
  const sidebars = Array.from(document.querySelectorAll('[data-tag="sidebar"]'));

  const toggleStickies = () => {
    if (sidebars[sidebars.length - 1].parentElement.getBoundingClientRect().y < 280) {
      sidebars.forEach((sidebar) => {
        sidebar.classList.remove('sticky');
      })
    } else if (sidebars[0].parentElement.getBoundingClientRect().y < 180) {
      sidebars.forEach((sidebar) => {
        sidebar.classList.add('sticky');
      })
    } else {
      sidebars.forEach((sidebar) => {
        sidebar.classList.remove('sticky');
      })
    }
  };

  window.addEventListener('scroll', toggleStickies);
  window.addEventListener('load', toggleStickies);
}