export default function formSlider() {
  const container = document.querySelector('.form-slide-wrapper');
  const slides = Array.from(document.querySelectorAll('[data-tag="form-slide"]'));
  const progressBar = document.querySelector('.blue.bar');
  const finishBar = document.querySelector('.orange.bar');

  let currentPosition = 0;

  progressBar.style.width = (100 / (slides.length + 1)) + '%';
  finishBar.style.width = (100 / (slides.length + 1)) + '%';
  container.style.width = (slides.length * 100) + '%';

  window.addEventListener('click', function (e) {
    if (e.target.getAttribute('data-tag') === 'form-next') {
      currentPosition++;
    }

    if (e.target.getAttribute('data-tag') === 'form-back') {
      currentPosition--;
    }

    if (currentPosition >= slides.length && e.target.getAttribute('data-tag') === 'form-next') {
      finishBar.style.transition = "width 800ms cubic-bezier(.78,.22,.21,.9)";
      finishBar.style.width = '100%';
      container.style.marginLeft = -(currentPosition * 100) + '%';
    } else {
      container.style.marginLeft = -(currentPosition * 100) + '%';
      progressBar.style.width = ((100 / ((slides.length) + 1)) * (currentPosition + 1)) + '%';
    }
  }, false);
}