// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const valueInputEl = document.querySelector('#font-size-control');
const styleTextEl = document.querySelector('#text');
// console.log('valueInputEl', valueInputEl);
// console.log('styleTextEl', styleTextEl);
valueInputEl.addEventListener('input', targetInputHandler);
// console.log('valueInputEl', valueInputEl);
function targetInputHandler(event) {
    styleTextEl.style.fontSize = `${event.currentTarget.value}px`;
}