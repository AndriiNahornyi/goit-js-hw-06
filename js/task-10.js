// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector("[type='number']"),
  btnCreate: document.querySelector('[data-create]'),
  div: document.querySelector('#controls'),
  divBoxes: document.querySelector('#boxes'),
  btnDestroy: document.querySelector('[data-destroy]'),
}
refs.div.addEventListener('click', onClickHandler);
function onClickHandler(event) {
  const btnEvent = event.target.dataset;
  if (btnEvent.hasOwnProperty('create')) {
    targetInputHandler();
  } else if (btnEvent.hasOwnProperty('destroy')) {
    targetClickHandler();
  } else {
    return;
  } 
 // console.dir(btnEvent);
}
// refs.btnCreate.addEventListener('click', targetInputHandler);
// refs.btnDestroy.addEventListener('click', targetClickHandler);

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(box);
    size += 10;
  }
}

function targetInputHandler() {
  createBoxes(refs.input.value);
  refs.input.value = '';
}

function targetClickHandler() {
  const {value} = refs.input;
  if (!value || value < 0) {
    refs.divBoxes.innerHTML = '';
    return;
  }
  for (let i = 0; i < value; i++) {
    if (i > refs.divBoxes.childElementCount - 1) {
      return;
    }
    refs.divBoxes.lastElementChild.remove();
  }
}