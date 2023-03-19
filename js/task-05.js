//! Завдання 5​

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const name = event.target.value.trim();
  nameOutput.textContent = name ? name : 'Anonymous';
});


//!---------------------------------------------------------------------------
//* У 5 та 6 завданнях рекомендую використовувати метод для рядків trim() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення 
// в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

  // const nameInput = document.querySelector("#name-input");
  // const nameOutput = document.querySelector("#name-output");

  // nameInput.addEventListener("input", () => {
  //   if (nameInput.value === "") {
  //     nameOutput.textContent = "Anonymous";
  //   } else {
  //     nameOutput.textContent = nameInput.value;
  //   }
  // });
  

// String.prototype.trim()
// Зведення
// Метод trim() видаляє пробільні символи з початку та кінця рядка. Пробільними символами в цьому контексті вважаються всі власне пробілові символи (пробіл, табуляція, нерозривний пробіл та інші) та всі символи кінця рядка (LF, CR та інші).

// Синтаксис
// str.trim()
// Опис
// Метод trim() повертає рядок з вирізаними пробілами з її кінців. Метод trim() не змінює значення самого рядка.

// Приклади
// приклад: використання методу trim()
// Наступний приклад покаже рядок 'foo':

// var orig = 'foo';
// console.log(orig.trim()); // 'foo'
