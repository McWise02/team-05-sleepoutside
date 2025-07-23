
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const message = document.getElementById("message");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  message.textContent = "";
  message.className = "message";

  const formData = new FormData(signupForm);

  // Create payload
  const payload = {
    name: formData.get("name"),
    address: formData.get("address"),
    email: formData.get("email"),
  };

  try {

    // Send POST request
    const response = await fetch("https://wdd330-backend.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign up failed");
    }
    console.log("User created successfully:", await response.json());
    message.textContent = "Account created successfully!";
    message.classList.add("success");
    signupForm.reset();
  } catch (err) {
    message.textContent = err.message;
    message.classList.add("error");
  }
});

});