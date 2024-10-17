
document.addEventListener("DOMContentLoaded", function() {
    var timeBegan = null; // did the clock start
    var timeStopped = null; // at what time was the timer stopped
    var stoppedDuration = 0; // how long was the timer stopped
    var startInterval = null; // this is needed to stop the startInterval() method
    var flag = false; // to control start and stop of the timer

    const timerContainer = document.getElementsByClassName("timercontainer")[0];
    timerContainer.addEventListener("click", function() {
        if (!flag) {
            startTimer();
            flag = true;
        } else {
            stoptimer(); 
            flag = false;
        }
    });

    timerContainer.addEventListener("dblclick", function() {
        resettimer();
    });

    function startTimer() {
        if (timeBegan === null)
            timeBegan = new Date();

    // console.log(timeBegan)
        if (timeStopped !== null)
            stoppedDuration += (new Date() - timeStopped);
//    console.log( stoppedDuration);
        startInterval = setInterval(clockRunning, 10);
    }

    function stoptimer() {
        timeStopped = new Date();
        clearInterval(startInterval);
    }

    function clockRunning() {
        var currenttime = new Date();
        var timeelapsed = new Date(currenttime - timeBegan - stoppedDuration);
//   console.log(timeelapsed);
        var minute = timeelapsed.getUTCMinutes();
        var second = timeelapsed.getUTCSeconds();
        var millisecond = timeelapsed.getUTCMilliseconds();

        millisecond = Math.floor(millisecond / 10);
        document.getElementById("timerdisplay").innerHTML = (minute = minute < 10 ? '0' + minute : minute) + ":" +
            (second = second < 10 ? '0' + second : second) + ":" +
            (millisecond = millisecond < 10 ? '0' + millisecond : millisecond);
    }

    function resettimer() {
        clearInterval(startInterval);
        timeBegan = null;
        timeStopped = null;
        stoppedDuration = 0;
        document.getElementById("timerdisplay").innerHTML = "00:00:00";
        flag = false;
    }
});