const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.querySelector('input[name=email]').value.trim();
  const password = document.querySelector('input[name=password]').value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    console.log({ email: email, password: password });
  }
});

form.style.maxWidth = '408px';
form.style.minHeigh = '256px';
form.style.position = 'absolute';
form.style.top = '30%';
form.style.left = '30%';
form.style.borderRadius = '8px';
form.style.padding = '24px';
form.style.width = '408px';
form.style.height = '256px';
form.style.backgroundColor = '#fff';
form.style.display = 'block';

const lables = document.querySelectorAll('label');
lables.forEach(lable => {
  lable.style.display = 'block';
  lable.style.fontWeight = '400';
  lable.style.fontSize = '16px';
  lable.style.lineHeight = '150%';
  lable.style.letterSpacing = '0.04em';
  lable.style.color = '#2e2f42';
  lable.style.marginBottom = '8px';
  lable.style.marginRight = 'auto';
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.style.maxWidth = '360px';
  input.style.minHeight = '40px';
  input.style.display = 'block';
});

const btn = document.querySelector('button');
btn.style.borderRadius = '8px';
btn.style.padding = '8px 16px';
btn.style.width = '86px';
btn.style.height = '40px';
btn.style.fontWeight = '500';
btn.style.fontSize = '16px';
btn.style.lineHeight = '150%';
btn.style.letterSpacing = '0.04em';
btn.style.color = '#fff';
btn.style.background = '#4e75ff';
btn.style.border = 'none';
