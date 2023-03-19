//! Завдання 4​

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});


//!---------------------------------------------------------------------------
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// const decrementBtn = document.querySelector("[data-action='decrement']");
// const incrementBtn = document.querySelector("[data-action='increment']");
// const valueEl = document.querySelector('#value');

// // Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// // Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// // Оновлюй інтерфейс новим значенням змінної counterValue.

// decrementBtn.addEventListener('click', function () {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });

// incrementBtn.addEventListener('click', function () {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });
