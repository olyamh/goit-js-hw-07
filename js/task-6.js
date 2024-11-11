function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let size = 30;

buttonCreate.addEventListener('click', createMarkup);
buttonDestroy.addEventListener('click', destroyMarkup);

function createMarkup() {
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    alert('Input number should be between 0 and 100');
    return;
  }

  createBoxes(Number(input.value));
}

function createBoxes(value) {
  const arr = [];
  box.innerHTML = '';
  size = 30;

  for (let i = 0; i < value; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);

    size += 10;
  }

  box.append(...arr);
}

function destroyMarkup() {
  box.innerHTML = '';
  input.value = '';
  size = 30;
}
