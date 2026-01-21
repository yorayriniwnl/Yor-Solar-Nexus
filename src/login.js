document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // correct credentials (demo only)
  const correctEmail = "admin@solarnexus.com";
  const correctPassword = "solar123";

  // user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const error = document.getElementById("error");

  if (email === correctEmail && password === correctPassword) {
    alert("Login successful!");
    
    // later you can redirect like this:
    // window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid email or password";
  }
});
