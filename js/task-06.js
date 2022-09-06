// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }
const validInputEl = document.querySelector('#validation-input');
// console.log('validInputEl', validInputEl);
validInputEl.addEventListener('blur', targetInputHandler);
// console.log('validInputEl', validInputEl);
function targetInputHandler (event) {
    if (event.target.value.length === Number(validInputEl.dataset.length)) {
    updateClassEl('valid', 'invalid');
        console.log('updateClassEl', updateClassEl);
    } else {
    updateClassEl('invalid', 'valid');
        console.log('updateClassEl', updateClassEl);
    }
}
function updateClassEl(addCl, remCl) {
    validInputEl.classList.remove(remCl);
    validInputEl.classList.add(addCl);
}