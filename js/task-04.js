// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueCounterEl = document.querySelector('#value');
// console.log('valueCounterEl', valueCounterEl);
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
// console.log('decrementBtnEl', decrementBtnEl);
const incrementBtnEl = document.querySelector('[data-action="increment"]');
// console.log('incrementBtnEl', incrementBtnEl);
decrementBtnEl.addEventListener('click', targetDecrementBtnClickHandler);
// console.log('targetDecrementBtn', decrementBtnEl);
incrementBtnEl.addEventListener('click', targetIncrementBtnClickHandler);
// console.log('targetIncrementBtn', incrementBtnEl);
let counterValue = 0;
function targetDecrementBtnClickHandler() {
    counterValue -= 1;
    valueCounterEl.textContent = counterValue;
    // console.log(valueCounterEl);
}
function targetIncrementBtnClickHandler() {
    counterValue += 1;
    valueCounterEl.textContent = counterValue;
    // console.log(valueCounterEl);
}
