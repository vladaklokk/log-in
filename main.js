function showSignIn() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('registration-screen').style.display = 'none';
  document.getElementById('user-info-screen').style.display = 'none';
  document.getElementById('sign-in-screen').style.display = 'block';
}

function showRegistration() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('sign-in-screen').style.display = 'none';
  document.getElementById('user-info-screen').style.display = 'none';
  document.getElementById('registration-screen').style.display = 'block';
}


function signIn() {
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  if (localStorage.getItem(email) === password) {
      showUserInfo(email);
  } else {
      alert('Invalid email or password. Please try again.');
  }
}

function registerUser() {
  const userName = document.getElementById('userName').value;
  const userSurname = document.getElementById('userSurname').value;
  const userDateOfBirth = document.getElementById('userDateOfBirth').value;
  const userEmail = document.getElementById('userEmail').value;
  const userPassword = document.getElementById('userPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!userName || !userSurname || !userDateOfBirth || !userEmail || !userPassword || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
  }

  if (userPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
  }

  localStorage.setItem(userEmail, userPassword);

  showUserInfo(userEmail);
}

function showUserInfo(email) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('sign-in-screen').style.display = 'none';
  document.getElementById('registration-screen').style.display = 'none';
  document.getElementById('user-info-screen').style.display = 'block';

  const userInfoDiv = document.getElementById('user-info');

  userInfoDiv.innerHTML = `<p>Email: ${email}</p>`;

  document.getElementById('signInEmail').value = '';
  document.getElementById('signInPassword').value = '';
  document.getElementById('userName').value = '';
  document.getElementById('userSurname').value = '';
  document.getElementById('userDateOfBirth').value = '';
  document.getElementById('userEmail').value = '';
  document.getElementById('userPassword').value = '';
  document.getElementById('confirmPassword').value = '';
}

function deleteAccount() {
  const userEmail = document.getElementById('userEmail').value;
  localStorage.removeItem(userEmail);
  showSignIn();
}

function leaveAccount() {
  showSignIn();
}
