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

const siteUrl = window.location.pathname.split("/");
const nav = document.querySelectorAll(".nav__links");
const about = nav[0];
const skillsAndTech = nav[1];
const projects = nav[2];
const contact = nav[3];
const resume = nav[4];