//! Завдання 6​

const input = document.querySelector('#validation-input');
const inputValueLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
  const inputValue = input.value.trim();

  if (inputValue.length === inputValueLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});


//!---------------------------------------------------------------------------
//* У завданні 6 бордер повинен набувати зеленого кольору, коли кількість введених символів дорівнює значенням атрибуту (ЦЕ ЧИСЛО) data-length (а не більше або менше).
//* Зверніть увагу у 6му завданні на elem.getAttribute(name) - отримує значення атрибута і повертає його.

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
