export default function selectBoxes() {
  const selectInputs = Array.from(document.querySelectorAll('[data-input="custom-select"]'));

  if (!selectInputs) return;

  const triggerSelect = (e, input) => {
    const value = (() => {
      let inputValue = input.getAttribute('data-value');
      let selectValue = e.getAttribute('data-select');

      if (inputValue.indexOf(selectValue) > -1) {
        return inputValue.split(',').filter((value) => value.trim() != selectValue);
      } else if (inputValue) {
        return inputValue + ", " + selectValue;
      } else {
        return selectValue;
      }
    })();

    input.setAttribute('data-value', value);
    e.classList.toggle('selected');
  };

  selectInputs.forEach((input) => {
    const isSwitch = input.getAttribute('data-switch') === 'true' ? true : false;

    input.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'span') {
        triggerSelect(e.target, input);

        if (isSwitch) {
          const spans = Array.from(input.querySelectorAll('span'));
          spans.forEach((span) => {
            if (span != e.target && span.classList.contains('selected')) {
              triggerSelect(span, input);
            }
          });
        }
      }
    });
  });
};