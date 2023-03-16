import { postRequest, getFormData } from "./utils.js";

function validateSlide(slides, currentPosition) {
  const validators = Array.from(slides[currentPosition].querySelectorAll('[data-required="true"]'));

  const isValidated = validators.reduce((acc, validator) => {
    let value;
    if (validator.getAttribute('type') === 'email') {
      value = /[@][a-zA-Z0-9]/.test(validator.value) ? true : false;
    } else {
      value = validator.value ? validator.value : validator.getAttribute('data-value');
    }
    return acc += value ? 1 : 0;
  }, 0);

  return isValidated === validators.length;
};

function manageGates() {
  const gateKeepers = Array.from(document.querySelectorAll('[data-gateway]'));

  gateKeepers.forEach((gateway) => {
    gateway.addEventListener('click', () => {
      if (gateway.getAttribute('data-value').indexOf('yes') > -1) {
        document.querySelector(`[data-gate-id=${gateway.getAttribute('data-gateway')}]`).classList.add('revealed');
      } else {
        document.querySelector(`[data-gate-id=${gateway.getAttribute('data-gateway')}]`).classList.remove('revealed');
      }
    });
  });
};

export function formSlider() {
  const container = document.querySelector('.form-slide-wrapper');
  const slides = Array.from(document.querySelectorAll('[data-tag="form-slide"]'));
  const progressBar = document.querySelector('.blue.bar');
  const finishBar = document.querySelector('.orange.bar');

  manageGates();

  let currentPosition = 0;

  progressBar.style.width = (100 / slides.length) + '%';
  finishBar.style.width = (100 / slides.length) + '%';
  container.style.width = (slides.length * 100) + '%';

  window.addEventListener('click', function (e) {
    if (e.target.getAttribute('data-tag') === 'form-next') {
      const validated = validateSlide(slides, currentPosition);
      if (!validated) {
        const requiredElements = Array.from(slides[currentPosition].querySelectorAll('[data-required="true"]'));
        const unfulfilled = requiredElements.filter((e) => !e.getAttribute('data-value'));

        const tooltip = `
          <div id="tooltip">Please fill out this field before continuing</div>
        `;

        unfulfilled[0].parentElement.insertAdjacentHTML('beforeend', tooltip);

        setTimeout(() => {
          document.querySelector('#tooltip').remove();
        }, 3000);

        return;
      }

      currentPosition++;
    }

    if (e.target.getAttribute('data-tag') === 'form-back') {
      currentPosition--;
    }

    if (currentPosition >= (slides.length - 1) && e.target.getAttribute('data-tag') === 'form-next') {
      finishBar.style.transition = "width 800ms cubic-bezier(.78,.22,.21,.9)";
      finishBar.style.width = '100%';
      container.style.marginLeft = -(currentPosition * 100) + '%';
    } else {
      container.style.marginLeft = -(currentPosition * 100) + '%';
      progressBar.style.width = ((100 / (slides.length)) * (currentPosition + 1)) + '%';
    }
  }, false);
}

// GET DATA + SUBMIT FORM
export function submitSliderForm() {
  const form = document.querySelector('form');
  const responseElement = document.querySelector('[data-tag="response"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = getFormData();

    postRequest(e.target.action, data, (res) => {
      if (res) {
        responseElement.innerHTML = `
          <h3 class="h2">Your request has been sent!</h3>  
          <p>We'll get back to you as soon as possible with your quote</p>
          <a href="/" class="btn orange-outline standard">Back home</a>
        `;
      } else {
        responseElement.innerHTML = `
          <h3 class="h2">Uho! Something went wrong</h3>  
          <p>Your request could not be sent at this time. Please try again later.</p>
          <a href="/" class="btn orange-outline standard">Back home</a>
        `;
      }
    });
  });
}
