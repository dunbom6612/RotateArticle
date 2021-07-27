const contentWrapper = document.querySelector(".container");
const nav = document.querySelector("nav");
const rotateCircle = document.querySelector(".rotateCircle");


document.querySelector("#open").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
  nav.classList.add('show-nav');
  rotateCircle.classList.add('show-nav');
})
document.querySelector("#close").addEventListener("click", () => {
  contentWrapper.classList.remove('show-nav');
  nav.classList.remove('show-nav');
  nrotateCircleav.classList.remove('show-nav');
})