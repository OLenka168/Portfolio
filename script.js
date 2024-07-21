gsap.from("#menu", {
  duration: 0.7,
  delay: 2,
  opacity: 0,
});

gsap.from("#introduction", {
  x: 5,
  duration: 0.7,
  delay: 1,
  opacity: 0,
});

gsap.to("h1", {
  text: "Olena Boichenko",
  duration: 2,
  ease: "power1.in",
});

gsap.to("h2", {
  text: "Freelance Web Developer",
  delay: 2,
  duration: 3,
  ease: "power1.in",
});

gsap.to("#text", {
  text: "Hi! I code and design beautifully simple things, and I love what I do.",
  duration: 5,
  ease: "power1.in",
  delay: 4.4,
});

VANTA.DOTS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 900.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x2020ff,
  color2: 0x7516ed,
  size: 5.2,
  spacing: 27.0,
});

window.onload = function () {
  let preloader = document.querySelector("#preloader");
  preloader.classList.add("hide-preloader");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  }, 990);
};

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");

home.addEventListener("click", function () {
  location.reload();
});

about.addEventListener("click", function () {
  document.querySelector(".about").style = "display:flex";
  document.querySelector(".intro").style = "display:none";
  document.querySelector(".project").style = "display:none";
  document.querySelector("#introduction").style = "display:none";
});

projects.addEventListener("click", function () {
  document.querySelector(".project").style = "display:block";
  document.querySelector(".intro").style = "display:none";
  document.querySelector(".about").style = "display:none";
  document.querySelector("#introduction").style = "display:none";
});

contact.addEventListener("click", function () {
  document.querySelector("form").style = "display:flex";
  document.querySelector(".intro").style = "display:none";
  document.querySelector(".about").style = "display:none";
  document.querySelector(".project").style = "display:none";
  document.querySelector("#introduction").style = "display:none";
});
