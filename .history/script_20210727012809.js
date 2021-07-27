const contentWrapper = document.querySelector(".container");
const nav = document.querySelector("nav");


document.querySelector("#open").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
  nav.classList.add('show-nav');
})
document.querySelector("#close").addEventListener("click", () => {
  contentWrapper.classList.remove('show-nav');
  nav.classList.remove('show-nav');
})