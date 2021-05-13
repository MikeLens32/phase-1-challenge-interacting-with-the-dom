// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("counter")
    
// })
let seconds = 0
const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const input = document.getElementById('comment-input')
const submit = document.getElementById('submit')

function increase() {
    seconds ++;
    counter.innerHTML = seconds;
}
plus.addEventListener("click", increase)

function decrease() {
    if (seconds > 0) {    
    seconds--
    counter.innerHTML = seconds
    }
}
minus.addEventListener("click", decrease)

let startCounting = setInterval(increase, 1000);
document.addEventListener("DOMContentLoaded", () => {
    startCounting;
});

function handleTimer() {
    if (pause.innerHTML === 'pause') {
        clearInterval(startCounting); 
        pause.innerHTML = 'resume';
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
    } else {
        startCounting = setInterval(increase, 1000);
        pause.innerHTML = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    }
}
pause.addEventListener("click", handleTimer);