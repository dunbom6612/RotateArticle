const contentWrapper = document.querySelector(".container");
const nav = document.querySelector("nav");
const rotateCircle = document.querySelector(".rotate-circle");


document.querySelector("#open").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
  nav.classList.add('show-nav');
  rotateCircle.classList.add('show-nav');
})
document.querySelector("#close").addEventListener("click", () => {
  contentWrapper.classList.remove('show-nav');
  nav.classList.remove('show-nav');
  rotateCircle.classList.remove('show-nav');
})