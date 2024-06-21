const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
// console.log(refs.startBtn);
// console.log(refs.stopBtn);
// console.log(refs.body);
let timerId = null;

refs.startBtn.addEventListener('click', onColorSwitchStart);
refs.stopBtn.addEventListener('click', onColorSwitchStop);
refs.stopBtn.setAttribute('disabled', 'true');

function onColorSwitchStart() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.setAttribute('disabled', 'true');
}

function onColorSwitchStop() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'true');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
