
function startTimer(duration,display) {
    var timer = duration, hours, minutes, second;
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
    let h = window.localStorage.getItem("h")
    let m = window.localStorage.getItem("m")
    let s = window.localStorage.getItem("s")
    console.log(h, m, s);
    h = parseInt(h)
    m = parseInt(m)
    s = parseInt(s)
    var measure = (h*3600) + (m*60) + s;
    display = document.querySelector('#time');
    startTimer(measure,display);
};