const header = document.querySelector("header");
const button = document.querySelector("#returnToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("bg");
    button.style.display = "block";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("tool-bar")) {
    nav.classList.remove("tool-bar");
    document.body.style.overflow = "";
    document.documentElement.overflow = "";
  } else {
    nav.classList.add("tool-bar");
    document.body.style.overflow = "hidden";
    document.documentElement.overflow = "hidden";
  }
};

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
