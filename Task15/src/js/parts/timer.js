export function timer(endtime, hoursBlockName, minutesBlockName, secondsBlockName) {

    let timerID = setInterval(applyTime, 500);

    function getTime(endtime) {
        let dif = Date.parse(endtime) - Date.parse(new Date()),
            seconds = `${Math.floor(Math.floor(dif / 1000 % 60) / 10)}${Math.floor(dif / 1000 % 60) % 10}`,
            minutes = `${Math.floor(Math.floor(dif / 1000 / 60 % 60) / 10)}${Math.floor(dif / 1000 / 60 % 60) % 10}`,
            hours = `${Math.floor(Math.floor(dif / 1000 / 60 / 60) / 10)}${Math.floor(Math.floor(dif / 1000 / 60 / 60) % 10)}`;
        if (dif <= 0) {
            clearInterval(timerID);
            return {
                seconds: 0,
                minutes: 0,
                hours: 0
            }
        } else {
            return {
                seconds: seconds,
                minutes: minutes,
                hours: hours
            }
        }
    }

    function applyTime() {
        let hoursBlock = document.querySelector(hoursBlockName),
            minutesBlock = document.querySelector(minutesBlockName),
            secondsBlock = document.querySelector(secondsBlockName),
            realTime = getTime(endtime);
        hoursBlock.textContent = realTime.hours;
        minutesBlock.textContent = realTime.minutes;
        secondsBlock.textContent = realTime.seconds;
    }
}