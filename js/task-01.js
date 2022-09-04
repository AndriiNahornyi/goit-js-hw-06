// Напиши скрипт, який: порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів (li.item).
// Для кожного элемента (li.item) у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення:
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

// const categoriesEl = document.querySelector('#categories');
const categoriesItemEl = document.querySelectorAll('li.item');

const NumberCategoriesItemEl = categoriesItemEl.length;
console.log('Number of categories:', NumberCategoriesItemEl);

// const itemsTitleEl = document.querySelectorAll('h2');
// const itemTitelEl = document.querySelectorAll('li.item > ul > li');
for (const categoryItemEl of categoriesItemEl) {
    console.log('Category:', categoryItemEl.firstElementChild.textContent);
    console.log('Elements:', categoryItemEl.lastElementChild.children.length);
}

