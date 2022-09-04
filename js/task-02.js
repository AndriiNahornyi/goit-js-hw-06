// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>
//   JavaScript містить масив рядків (const ingredients)
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsListEl = document.querySelector('#ingredients');
    // console.log('ingredientsListEl', ingredientsListEl);
  const newIngredientsEl = ingredients.map(ingredient => {
  const ingredientsLiEl = document.createElement('li');
  ingredientsLiEl.textContent = ingredient;
  ingredientsLiEl.classList.add('item');
    return ingredientsLiEl;
});
ingredientsListEl.append(...newIngredientsEl);
