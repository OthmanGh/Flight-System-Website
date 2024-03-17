const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

// const userLogin = () => {
//   const url = 'http://localhost/Flight-System-Website/backend/login.php';
//   const formatData = new FormData();

//   formatData.append('email', userEmail.value);
//   formatData.append('password', userPassword.value);

//   const options = {
//     method: 'POST',
//     body: formatData,
//   };

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data['status'] === 'success') {
//         localStorage.setItem('id', data['id']);
//         window.location.href = 'http://127.0.0.1:5500/frontend/pages/landingPage.html';
//       }
//     });
// };

const userLogin = async () => {
  const url = 'http://localhost/Flight-System-Website/backend/login.php';
  const formatData = new FormData();

  formatData.append('email', userEmail.value);
  formatData.append('password', userPassword.value);

  const options = {
    method: 'POST',
    body: formatData,
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (data['status'] === 'success') {
      localStorage.setItem('id', data['id']);
      window.location.href = 'http://127.0.0.1:5500/frontend/pages/landingPage.html';
    } else {
      console.log('incoorect credentials');
    }
  } catch (error) {
    console.error(error);
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(userEmail.value);
  console.log(userPassword.value);

  userLogin();
});
