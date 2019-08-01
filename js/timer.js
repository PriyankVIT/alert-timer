function startTimer(duration,display) {
    var timer = duration, days, hours, minutes, second;

    var interval = setInterval(function () {
        days = parseInt((timer / (24*60*60)), 10);
        hours   = parseInt((timer / (60*60)) - (days*24), 10);
        minutes = parseInt((timer / (60)) - (hours*60) - (days*24*60), 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("days").innerHTML = days;

        if (--timer < 0) {
            document.getElementById("up").innerHTML = "TIME UP";
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            clearInterval(interval);
        } 
    }, 1000);
}
window.onload = function () {  
    let d = window.localStorage.getItem("d")
    let h = window.localStorage.getItem("h")
    let m = window.localStorage.getItem("m")
    let s = window.localStorage.getItem("s")
    console.log(d, h, m, s);
    d = parseInt(d)
    h = parseInt(h)
    m = parseInt(m)
    s = parseInt(s)
    console.log(d,h,m,s)
    var measure =(d*24*60*60) + (h*60*60) + (m*60) + s;
    display = document.querySelector('#time');
    startTimer(measure,display);
};