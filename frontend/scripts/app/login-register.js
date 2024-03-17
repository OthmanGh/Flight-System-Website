const loginForm = document.getElementById('login-form');
const userName = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(userName.value);
  console.log(userPassword.value);
});
