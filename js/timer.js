function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    var interval = setInterval(function () {
        hours   = parseInt(timer / 3600, 10);
        minutes = parseInt((timer / 60)-(hours*60), 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("hours").innerHTML = hours;

        if (--timer < 0) {
            document.getElementById("up").innerHTML = "TIME UP";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            clearInterval(interval);
        } 
    }, 1000);
  }
window.onload = function () {
    var measure = (1*3600) + (0*60) + 0;
    display = document.querySelector('#time');
    startTimer(measure, display);
};  