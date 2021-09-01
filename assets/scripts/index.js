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

    // adds event listener to minimize menu
    setTimeout(() => {
      wrapper.addEventListener("click", wrapEvent);
    }, 100);
  });
})();

const siteUrl = document.location.href.split("#");
console.log("Site url:", siteUrl);

const nav = document.querySelectorAll(".nav__links");
const about = nav[0];
const skillsAndTech = nav[1];
const projects = nav[2];
const contact = nav[3];
const resume = nav[4];
