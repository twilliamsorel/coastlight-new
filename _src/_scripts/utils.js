module.exports = recurseDOM = (e, target) => {
  if (e === target) {
    return true;
  } else if (e.tagName == 'BODY') {
    return false;
  } else {
    return recurseDOM(e.parentElement, target);
  }
};