const addAnalytics = () => {
  const fragment = document.createDocumentFragment();
  const scriptOne = document.createElement('script');
  scriptOne.src = "https://www.googletagmanager.com/gtag/js?id=G-45KCHHKCM7";
  fragment.appendChild(scriptOne);
  const scriptTwo = document.createElement('script');
  scriptTwo.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-45KCHHKCM7');
    `;
  fragment.appendChild(scriptTwo);

  document.querySelector('head').appendChild(fragment);
};

export default function cookieBanner() {
  const cookieBanner = document.querySelector('.cookie-banner');
  const isCookieSet = sessionStorage.getItem('cookies');

  if (isCookieSet === 'true') {
    addAnalytics();
  }

  if (isCookieSet) return
  else {
    cookieBanner.style.display = 'block';
  }

  cookieBanner.addEventListener('click', (e) => {
    e.preventDefault();
    const cookiePreference = e.target.getAttribute('data-cookies');

    if (!cookiePreference) return;

    if (cookiePreference === 'accept') {
      sessionStorage.setItem('cookies', true);
    } else {
      sessionStorage.setItem('cookies', false);
    }

    cookieBanner.style.display = 'none';
    addAnalytics();
  });
};
