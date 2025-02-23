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

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  let currentUrl = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
