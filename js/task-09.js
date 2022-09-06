// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const styleBodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
// console.log(styleBodyEl);
// console.log(textEl);
// console.log(btnEl);
btnEl.addEventListener('click', targetInputHandler);
// console.log(btnEl);
function targetInputHandler(event) {
  const colorEl = getRandomHexColor;
  styleBodyEl.style.backgroundColor = colorEl();
  textEl.textContent = colorEl();
}