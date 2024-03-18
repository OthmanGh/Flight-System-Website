const userLogin = async () => {
  const url = 'http://localhost/Flight-System-Website/backend/login-register/login.php';
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

    console.log(data);

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

const userRegister = async () => {
  const url = 'http://localhost/Flight-System-Website/backend/login-register/login.php';
  const formatData = new FormData();

  formatData.append('username', userName.value);
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

  //userLogin();
  userRegister();
});
