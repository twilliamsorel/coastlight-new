export default function () {
  let isMobile = document.querySelector('.image-gallery-mobile');
  let galleryButton = document.querySelector('[data-tag="toggle-gallery"]');
  let hiddenGalleryItems = document.querySelectorAll('[data-display="none"]');
  let position = 0;

  const rowSize = isMobile ? 5 : 3;

  // EXPANSION ANIMATION
  const gallery = document.querySelector('.gallery-container');
  const mask = document.querySelector('.gallery-mask');

  window.onload = () => {
    mask.style.height = gallery.clientHeight + 'px';
  };

  window.addEventListener('resize', function () {
    mask.style.height = gallery.clientHeight + 'px';
  });

  // INFINITE GALLERY PAGINATION
  galleryButton.addEventListener('click', function () {
    mask.classList.add('animate');

    for (let i = position; i < (position + rowSize); ++i) {
      if (hiddenGalleryItems[i]) {
        hiddenGalleryItems[i].setAttribute('data-display', 'visible');
      }

      if (!hiddenGalleryItems[i + 1]) {
        galleryButton.style.display = 'none';
        break;
      }
    }
    position += 3;

    mask.style.height = gallery.clientHeight + 'px';
    setTimeout(() => {
      mask.classList.remove('animate');
    }, 600)
  });
};

