gsap.from('#menu', {
  duration: .7,
  delay: 2,
  opacity: 0
})

gsap.from('#introduction', {
  x: 5,
  duration: .7,
  delay: 1,
  opacity: 0
})

gsap.to('h1', {
  text: 'Olena Boichenko',
  duration: 2,
  ease: 'power1.in'
})

gsap.to('h2', {
  text: 'Freelance Web Developer',
  delay:2,
  duration: 3,
  ease: 'power1.in'
})

gsap.to('#text', {
  text: 'Hi! I code and design beautifully simple things, and I love what I do.',
  duration: 5,
  ease: 'power1.in',
  delay: 4.4
})

VANTA.DOTS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 900.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x2020ff,
  color2: 0x7516ed,
  size: 5.20,
  spacing: 27.00
})

window.onload = function() {
  let preloader = document.querySelector('#preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function() {
    preloader.classList.add('preloader-hidden');
  }, 990);
}

let home = document.querySelector('#home');
let about = document.querySelector('#about');
let projects = document.querySelector('#projects');
let contact = document.querySelector('#contact');

home.addEventListener('click', function() {
  location.reload();
})

about.addEventListener('click', function() {
  document.querySelector('.about').style = 'display:flex';
  document.querySelector('.intro').style = 'display:none';
  document.querySelector('.project').style = 'display:none';
  document.querySelector('#introduction').style = 'display:none';
})

projects.addEventListener('click', function() {
  document.querySelector('.project').style = 'display:block';
  document.querySelector('.intro').style = 'display:none';
  document.querySelector('.about').style = 'display:none';
  document.querySelector('#introduction').style = 'display:none';
})

contact.addEventListener('click', function() {
  document.querySelector('form').style = 'display:flex';
  document.querySelector('.intro').style = 'display:none';
  document.querySelector('.about').style = 'display:none';
  document.querySelector('.project').style = 'display:none';
  document.querySelector('#introduction').style = 'display:none';
})











// gsap.to('#home', {
//   text: 'HOME',
//   duration: 2,
//   ease: 'power1.in',
//   delay: 8
// })

// gsap.to('#about', {
//   text: 'ABOUT',
//   duration: 2,
//   ease: 'power1.in',
// })

// gsap.to('#projects', {
//   text: 'PROJECTS',
//   duration: 2,
//   ease: 'power1.in',
  
// })

// gsap.to('#contact', {
//   text: 'CONTACT',
//   duration: 2,
//   ease: 'power1.in',
  
// })

// burgerBtn.addEventListener('click', burger);

// function burger() {
//   burgerBtn.classList.toggle('active');
//   menuNav.classList.toggle('active');
//   hide.classList.toggle('active');
// }