function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (--timer < 0) {
            document.getElementById("up").innerHTML = "TIME UP";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        } 
    }, 1000);
  }
window.onload = function () {
    var min = 121,
    display = document.querySelector('#time');
    startTimer(min, display);
};  