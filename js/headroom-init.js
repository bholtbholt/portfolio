(() => {
  const myElement = document.querySelector('[data-behavior~="headroom"]');
  const headroom = new Headroom(myElement);
  headroom.init();
})();
