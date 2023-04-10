//listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
  } else {
    console.log('user logged out', user);
  }
});

//registration form
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

// get user info
const em = signupForm['email'].value;
const pass = signupForm['pass1'].value;


// sign up the user
auth.createUserWithEmailAndPassword(em, pass).then(cred => {
  // close & reset the signup form
  const sideForm = document.querySelector('#signup-form');
  M.Sidenav.getInstance(sideForm).close();
  signupForm.reset();
});
});

//user login 
const loginForm = document.querySelector('#login-form');
btnLogin.addEventListener('click', (e) => {
e.preventDefault();

// get user info
const email = loginForm['login-email'].value;
const password = loginForm['login-password'].value;

// log the user in
auth.signInWithEmailAndPassword(email, password).then((cred) => {
  // reset form
  loginForm.reset();
  window.location.href ="/index.html";
});

});

//user logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
e.preventDefault();
auth.signOut();
});