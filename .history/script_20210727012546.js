const contentWrapper = document.querySelector(".content");
const nav = document.querySelector("nav");


document.querySelector("#open").addEventListener("click", () => {
  contentWrapper.classList.add('show-nav');
})