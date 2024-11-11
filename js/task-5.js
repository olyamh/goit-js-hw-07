function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColour);

function changeColour() {
  document.body.style.backgroundColor = getRandomHexColor();
  const colorName = document.querySelector('.color');
  colorName.textContent = `${getRandomHexColor()}`;
}
