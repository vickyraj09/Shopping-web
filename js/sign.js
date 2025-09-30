// Select the form
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submit (for now)

  // Collect form values
  const firstName = document.getElementById("first-name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const otp = document.getElementById("otp").value.trim();

  // Validation flags
  let isValid = true;
  let message = "";

  // First Name validation
  if (firstName.length < 2) {
    isValid = false;
    message = "First name must be at least 2 characters.";
  }

  // Mobile validation
  else if (!/^[0-9]{10}$/.test(mobile)) {
    isValid = false;
    message = "Enter a valid 10-digit mobile number.";
  }

  // Email validation
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    isValid = false;
    message = "Enter a valid email address.";
  }

  // Username validation
  else if (username.length < 4) {
    isValid = false;
    message = "Username must be at least 4 characters.";
  }

  // Password validation
  else if (password.length < 6) {
    isValid = false;
    message = "Password must be at least 6 characters.";
  }

  // OTP validation
  else if (!/^[0-9]{6}$/.test(otp)) {
    isValid = false;
    message = "Enter a valid 6-digit OTP.";
  }

  // Show result
  if (!isValid) {
    alert(message);
  } else {
    alert("🎉 Account created successfully!");
  }
});
