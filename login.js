// Get form elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.querySelector("#login-form input[type='text']");
const passwordInput = document.querySelector("#login-form input[type='password']");

// Add event listener for form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate form fields
  if (!usernameInput.value || !passwordInput.value) {
    alert("Please enter a username and password.");
    return;
  }

  // Call login function if form is valid
  login(usernameInput.value, passwordInput.value);
});

// Define login function
function login(username, password) {
  // Use Firebase Authentication to sign in the user
  auth.signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
      // Handle successful login
      console.log("User logged in successfully:", userCredential.user);
    })
    .catch((error) => {
      // Handle login error
      console.error("Error logging in:", error);
      alert("Invalid username or password.");
    });
}
