const nameInput = document.querySelector('#name-input');
nameInput.style.fontWeight = `400`;
nameInput.style.fontSize = `16px`;
nameInput.style.lineHeight = `150%`;
nameInput.style.letterSpacing = `0.04em`;
nameInput.style.color = `#2e2f42`;
nameInput.style.padding = `8px 16px`;
nameInput.style.maxWidth = `360px`;
nameInput.style.height = `40px`;
nameInput.style.margin = `16px auto`;

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  let trimmedName = nameInput.value.trim();
  nameOutput.textContent = trimmedName || 'Anonymous';
});

const hello = document.querySelector('h1');
hello.style.fontWeight = `600`;
hello.style.fontSize = `24px`;
hello.style.lineHeight = `133%`;
hello.style.letterSpacing = `0.04em`;
hello.style.color = `#2e2f42`;
