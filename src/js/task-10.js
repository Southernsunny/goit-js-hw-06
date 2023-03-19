//! Завдання 10 (виконувати не обов'язково)​

const controls = document.querySelector('#controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// Функція для генерації випадкового HEX-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  // Очищаємо вміст div#boxes перед створенням нових елементів
  boxes.innerHTML = '';

  // Задаємо початкові значення ширини і висоти для першого елемента
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i++) {
    // Створюємо новий div-елемент
    const box = document.createElement('div');

    // Задаємо йому розміри, колір та рамку
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.border = '1px solid black';

    // Додаємо новий елемент у div#boxes
    boxes.appendChild(box);

    // Збільшуємо розміри для наступного елемента
    boxWidth += 10;
    boxHeight += 10;
  }
}

function destroyBoxes() {
  // Очищаємо вміст div#boxes
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(controls.querySelector('input').value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});


//! -------------------------------------------------------------- 
//^ Потрібно ще розібратись, зроблено не самостійно


// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
