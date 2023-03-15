export function postRequest(url, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      if (callback)
        callback(this.response);
    }
  }
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);
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
