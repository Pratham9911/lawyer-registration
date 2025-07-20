// script.js

const form = document.querySelector("form"),
      nextBtn = form.querySelector(".nextBtn"),
      backBtn = form.querySelector(".backBtn");

nextBtn.addEventListener("click", () => {
    form.classList.add('secActive');
});

backBtn.addEventListener("click", () => {
    form.classList.remove('secActive');
});
