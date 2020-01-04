let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let stop = document.querySelector('.stop');

let minutesStopwatch;
let secondsStopwatch;

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
    minutes.innerHTML = 25;
    seconds.innerHTML = '00';
})