(function () {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav__links");
  const wrapper = document.querySelector(".wrapper");

  const wrapEvent = () => {
    nav.classList.remove("nav__links-active");
    menu.classList.remove("toggle");
  };

  // toggle navbar
  menu.addEventListener("click", () => {
    wrapper.removeEventListener("click", wrapEvent);
    nav.classList.toggle("nav__links-active");

    // for menu animation
    menu.classList.toggle("toggle");

    // adds event listener to minimize menu, after 0.1s
    setTimeout(() => {
      wrapper.addEventListener("click", wrapEvent);
    }, 100);
  });
})();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__links li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight / 5)) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav__link-active");
    if (link.classList.contains(current)) {
      console.log("current:", current);
      link.classList.add("nav__link-active");
    }
  });
});
