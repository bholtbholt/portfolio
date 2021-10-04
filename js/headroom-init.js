(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  // Only init headroom on desktop and above
  if (mediaQuery.matches) {
    const myElement = document.querySelector('[data-behavior~="headroom"]');
    const headroom = new Headroom(myElement);
    headroom.init();
  }
})();
