let initialMinutes = document.querySelector('.minutes').innerHTML;
let initialSeconds = document.querySelector('.seconds').innerHTML;

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let stop = document.querySelector('.stop');

let minutesStopwatch;
let secondsStopwatch;


let count = 1;
 
function addTimeToCard(minutes, seconds) {
    let timeCard = `
    <div class="card">
        <div class="d-flex flex-row card-body">
            <h1 class="ml-5 mr-5">Time ${count++}: </h1>
            <h1 class="mx-auto">${minutes}:${seconds}</h1>
        </div>
    </div>
    `;

    document.querySelector('.recorded-times').insertAdjacentHTML('beforeend', timeCard);
}


let hasBeenPause = false;

function aSecond(minutes, seconds) {
    seconds.innerHTML = 59;

    secondsStopwatch = setInterval(function () {
        if (seconds.innerHTML != 0 || seconds.innerHTML != '0') {
            seconds.innerHTML--;
        }

        if(seconds.innerHTML == 0 && minutes.innerHTML != 0) {
            minutes.innerHTML--;
            clearInterval(secondsStopwatch)
            aSecond(minutes, seconds)
        }

        if(seconds.innerHTML == 0 && minutes.innerHTML == 0) {
            clearInterval(secondsStopwatch)
            return;
        }

    }, 100)
}

start.addEventListener('click', function () {
    if(isNaN(minutes.innerHTML)) {
        console.log('not a number')
        alert('Please insert a valid number');
        return;
    }
    
    minutes.innerHTML--;
    aSecond(minutes, seconds);
});

pause.addEventListener('click', function () {
    clearInterval(secondsStopwatch);
})

stop.addEventListener('click', function () {
    clearInterval(secondsStopwatch);
    addTimeToCard(initialMinutes - minutes.innerHTML, 59 - seconds.innerHTML);
    minutes.innerHTML = 25;
    seconds.innerHTML = '00';
})