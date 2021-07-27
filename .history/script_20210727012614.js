const contentWrapper = document.querySelector(".content");
const nav = document.querySelector("nav");


document.querySelector("#open").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
  nav.classList.classList.add('show-nav');
})
document.querySelector("#close").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
  nav.classList.classList.add('show-nav');
})