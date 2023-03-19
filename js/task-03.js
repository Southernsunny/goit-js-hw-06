//! Завдання 3​

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryItems = images
  .map(image => {
    return `<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}" width="400"></li>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItems);
// console.log(galleryItems);


//!---------------------------------------------------------------------------
//* У завданні 3 використовуємо шаблонний рядок і insertAdjacentHTML(), його рішення не аналогічне рішенню 2-го завдання.
//* У другому та третьому завданнях вставляють елементи списку по черзі, хоча потрібно за одну операцію. І в другому, і в третьому завданнях додавання елементів у DOM має здійснюватися за одну операцію вставки (зверніть на це особливу увагу). Уточнення - лічильник повинен показувати і негативні значення(-1, -2, -3 і т. д.)
//* При виконанні завдань замість більш звичного вам циклу for віддавайте перевагу методам масиву, що перебирають (це актуально як для 1-3 завдань, так і для 10-го необов‘язкового).

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
