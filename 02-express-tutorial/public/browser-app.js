const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");
