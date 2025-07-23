


import { loadHeaderFooter, userLoggedIn }  from "./utils.mjs";


if (!userLoggedIn()) {
  window.location.href = "/login/index.html"; 
}


loadHeaderFooter();

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector(".registration-banner .close-btn");
    const banner = document.querySelector(".registration-banner");
    const registerBtn = document.querySelector(".register-btn");

    registerBtn.addEventListener("click", () => {
        window.location.href = "/register/index.html"; 
        });
    closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
  });
});

