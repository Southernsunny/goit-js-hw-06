//! Завдання 9​

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});


//!---------------------------------------------------------------------------
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

//* 9 завдання - колір у стилях і показаний в інтерфейсі - однакові https://gyazo.com/6416280210f9b7b977d0d341fd46a744 

