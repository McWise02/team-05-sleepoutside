// import { setLocalStorage }  from "./utils.mjs";



// document.getElementById("loginForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const errorMessage = document.getElementById("errorMessage");
//   const successMessage = document.getElementById("successMessage");


//   errorMessage.textContent = "";
//   successMessage.textContent = "";


//   const emailRequirements = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRequirements.test(email)) {
//     errorMessage.textContent = "Please enter a valid email address.";
//     return;
//   }

//   const passwordRequirments = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//   if (!passwordRequirments.test(password)) {
//     errorMessage.textContent = "Password must be at least 8 characters long, include a number, and a special character.";
//     return;
//   }

// setLocalStorage("user-authorized", { email, password });
//   successMessage.textContent = "Login successful! Redirecting...";
//   setTimeout(() => {
//     window.location.href = "/index.html";
//   }, 1500);
// });