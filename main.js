let minutes = document.querySelector('.minutes');

let stopwatch = setInterval(function() {
   if(minutes.innerHTML != 0 || minutes.innerHTML != '0') {
        minutes.innerHTML--;
        console.log(minutes)
   } else {
       clearInterval(stopwatch);
   }
}, 100);
