// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const valueInputEl = document.querySelector('#name-input');
const valueOutputEl = document.querySelector('#name-output');
// console.log('valueInputEl', valueInputEl);
// console.log('valueOutputEl', valueOutputEl);
valueInputEl.addEventListener('input', targetInputHandler);
// console.log('valueInputEl', valueInputEl);
function targetInputHandler(event) {
    if (event.target.value.trim() === '') {
        valueOutputEl.textContent = 'Anonymous'; 
        return;
    }
    valueOutputEl.textContent = event.target.value.trim();
}
