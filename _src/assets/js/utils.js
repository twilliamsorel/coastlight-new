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

export function getFormData(formSelector = "form") {
  const form = document.querySelector(formSelector);
  const inputs = Array.from(form.querySelectorAll('[name]'));

  const data = inputs.reduce((acc, input, i) => {
    if (i != 0) acc += '&';
    return acc += `${input.getAttribute('name')}=${input.value ? input.value : input.getAttribute('data-value')}`;
  }, '');

  return data;
};

export function recurseDOM(e, target) {
  if (e === target) {
    return true;
  } else if (e.tagName == 'BODY') {
    return false;
  } else {
    return recurseDOM(e.parentElement, target);
  }
};
