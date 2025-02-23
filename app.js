// menu
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let burger = document.getElementById("burger");
  let overlay = document.getElementById("overlay");
  let closeButton = document.querySelector("#menu .close");

  burger.addEventListener("click", function () {
    menu.classList.add("visible");
    overlay.classList.add("visible");
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.remove("visible");
    overlay.classList.remove("visible");
  });

  overlay.addEventListener("click", function () {
    menu.classList.remove("visible");
    overlay.classList.remove("visible");
  });
});

// nav active link
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  let currentUrl = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});

// scroll nav
let num = document.getElementById("num");
let navTop = document.getElementById("nav_top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navTop.classList.add("scrolled");
    num.classList.add("scrolled");
  } else {
    navTop.classList.remove("scrolled");
    num.classList.remove("scrolled");
  }
});
