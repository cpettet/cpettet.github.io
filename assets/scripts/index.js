(function () {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav__links");

  // toggle navbar
  menu.addEventListener("click", () => {
    nav.classList.toggle("nav__links-active");
    
    // for menu animation
    menu.classList.toggle("toggle");
  });
})();
