//! Завдання 7​

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = fontSizeControl.value + 'px';
});

//!---------------------------------------------------------------------------
//  При кожній зміні значення input#font-size-control, викликається функція обробки події, яка встановлює новий розмір шрифту для span#text, 
//  використовуючи властивість style.fontSize.Значення нового розміру отримується зі значення input#font - size - control, яке міняється при переміщенні повзунка.

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
// const input = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// input.addEventListener('input', () => {
//   text.style.fontSize = input.value + 'px';
// });