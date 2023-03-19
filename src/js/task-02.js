//! Завдання 2​

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('#ingredients');

const listItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  return ingredientItem;
});

ingredientsList.append(...listItems);

// console.log(ingredientsList);


//!---------------------------------------------------------------------------
//* У другому та третьому завданнях вставляють елементи списку по черзі, хоча потрібно за одну операцію.
//* І в другому, і в третьому завданнях додавання елементів у DOM має здійснюватися за одну операцію вставки(зверніть на це особливу увагу).
//* Уточнення - лічильник повинен показувати і негативні значення(-1, -2, -3 і т.д.)
//* При виконанні завдань замість більш звичного вам циклу for віддавайте перевагу методам масиву, що перебирають (це актуально як для 1-3 завдань, так і для 10-го необов‘язкового).

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// const ingredientsList = document.querySelector('#ingredients');

// const listItems = ingredients.map(ingredient => {
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// const listItem = document.createElement('li');
// Додасть назву інгредієнта як його текстовий вміст.
// listItem.textContent = ingredient;
// Додасть елементу клас item.
//   listItem.classList.add('item');
//   return listItem;
// });

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// ingredientsList.append(...listItems);
