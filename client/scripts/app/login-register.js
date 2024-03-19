const clearLoginInputs = () => {
  userEmailLogin.value = '';
  userPasswordLogin.value = '';
};

const clearRegisterInputs = () => {
  userNameRegister.value = '';
  userEmailRegister.value = '';
  userPasswordRegister.value = '';
};

const userLogin = async (e) => {
  e.preventDefault();

  const url = 'http://localhost/Flight-System-Website/backend/login-register/login.php';
  const formatData = new FormData();

  formatData.append('email', userEmailLogin.value);
  formatData.append('password', userPasswordLogin.value);

  const options = {
    method: 'POST',
    body: formatData,
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);

    if (data['status'] === 'success') {
      clearLoginInputs();

      localStorage.setItem('id', data['id']);
      window.location.href = 'http://127.0.0.1:5500/frontend/pages/landingPage.html';
    } else {
      error.textContent = `${data['message']} 😂`;
    }
  } catch (error) {
    console.error(error);
  }
};

const userRegister = async (e) => {
  e.preventDefault();

  const url = 'http://localhost/Flight-System-Website/backend/login-register/register.php';
  const formatData = new FormData();

  formatData.append('username', userNameRegister.value);
  formatData.append('email', userEmailRegister.value);
  formatData.append('password', userPasswordRegister.value);

  const options = {
    method: 'POST',
    body: formatData,
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data);

    if (data['status'] === 'success') {
      clearRegisterInputs();
      localStorage.setItem('id', data['id']);
      window.location.href = 'http://127.0.0.1:5500/frontend/pages/landingPage.html';
    } else {
    }
  } catch (error) {
    console.error(error);
  }
};

loginForm?.addEventListener('submit', userLogin);
registerForm?.addEventListener('submit', userRegister);

switchToLogin?.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

switchToRegister?.addEventListener('click', () => {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});
