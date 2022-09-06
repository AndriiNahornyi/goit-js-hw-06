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


const categoriesItemEl = document.querySelector('#categories').children;
// const categoriesItemEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesItemEl.length);

// const NumberCategoriesItemEl = categoriesItemEl.length;
// console.log('Number of categories:', NumberCategoriesItemEl);

for (const categoryItemEl of categoriesItemEl) {
    console.log('Category:', categoryItemEl.querySelector('h2').textContent);
    console.log('Elements:', categoryItemEl.querySelectorAll('li').length);
}

