export function postRequest(url, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE) {
      if (callback)
        callback(this.response);
    }
  }
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);
};

export const getFormData = (selector = 'form') =>
  Array.from(document.querySelector(selector).querySelectorAll('[name]'))
    .reduce((acc, input, i) => {
      return acc += `${i != 0 ? '&' : ''}${input.getAttribute('name')}=${input.value ? input.value : input.getAttribute('data-value')}`;
    }, '');

export function recurseDOM(e, target) {
  if (e === target) {
    return true;
  } else if (e.tagName == 'BODY') {
    return false;
  } else {
    return recurseDOM(e.parentElement, target);
  }
};

export function stringToObject(string) {
  return string.split('&').reduce((a, v) => ({ ...a, [v.split('=')[0]]: v.split('=')[1] }), {});
};

export function sendForm(formSelector = 'form') {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = getFormData(formSelector) + '&recipient=trevor@coastlightdigital.com';
    const structuredData = stringToObject(data);

    if (structuredData['g-recaptcha-response'] == 'null') {
      document.querySelector('.g-recaptcha').style.border = '2px solid red';
      return;
    }

    postRequest(e.target.action, data, (res) => {
      if (res) {
        form.parentElement.innerHTML = `
          <div class="text-center">
            <h3 class="h2">Your message is on its way!</h3>
            <p>thanks for reaching out. We'll get back to you as soon as we're able.</p>
            <br><br>
            <a href="/" class="btn standard orange-outline">Back home</a>
          </div>`;
      } else {
        form.parentElement.innerHTML = `
          <div class="text-center">
            <h3 class="h2">Uho! Something went wrong</h3>  
            <p>Your request could not be sent at this time. Please try again later.</p>
            <br><br>
            <a href="/" class="btn orange-outline standard">Back home</a>
          </div>
        `;
      }
    });
  });
}
