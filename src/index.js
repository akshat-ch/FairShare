// Sign up form
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Error signing up
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// Sign in form
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Error signing in
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// Switch between sign up and sign in forms
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
