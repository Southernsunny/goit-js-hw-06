//! Завдання 1​

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}\n Elements: ${categoryElements}`);
});


//!---------------------------------------------------------------------------
//* У завданні 1 не потрібний ланцюжок методів, що перебирають, вистачить одного – не ускладнюйте код.

// HTML містить список категорій ul#categories.
// Напиши скрипт, який:
/*
//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
console.log(`Number of categories: ${categoriesItems.length}`);
//3. Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}\n Elements: ${categoryElements}`);
});
*/
//? Як зробити перенесення рядка в Console Log? Це можна зробити за допомогою символу перекладу рядка: \n .

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
