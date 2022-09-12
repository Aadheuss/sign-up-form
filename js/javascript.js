const pwd1 = document.getElementById('password');
const pwd2 = document.getElementById('confirm-pass');
pwd2.addEventListener('input', checkPassword); 

function checkPassword() {
  const pwd1Val = document.getElementById('password').value;
  const pwd2Val = document.getElementById('confirm-pass').value;

  if (pwd1Val !== pwd2Val) {
    pwd2.classList.add('error');
  } else {
    pwd2.classList.remove('error');
  }
} 