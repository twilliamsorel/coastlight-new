export default function sliderAnimator() {
  const slideContainer = document.querySelector('.scroll-container');

  let startCoord;
  let currentOffset = 0;

  // DESKTOP
  slideContainer.addEventListener('mousedown', function (e) {
    startCoord = e.clientX;
    currentOffset = slideContainer.scrollLeft;
  });

  slideContainer.addEventListener('mouseup', function (e) {
    currentOffset = slideContainer.scrollLeft;
    startCoord = null;
  });

  window.addEventListener('mouseout', function () {
    currentOffset = slideContainer.scrollLeft;
    startCoord = null;
  })

  slideContainer.addEventListener('mousemove', function (e) {
    if (startCoord) {
      let dynamicOffset = currentOffset + (startCoord - e.clientX);
      slideContainer.scrollLeft = dynamicOffset;
    }
  });
};