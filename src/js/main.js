


import { loadHeaderFooter, userLoggedIn }  from "./utils.mjs";


if (!userLoggedIn()) {
  window.location.href = "/login/index.html"; 
}


loadHeaderFooter();







productList.init();

