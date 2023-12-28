function getTimeRemaining(endtime) {
    const now = new Date();
    const targetDate = new Date(endtime);
    const t = Date.parse(targetDate.toString()) - Date.parse(now.toString()) + (60 * 60 * 1000);
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const remainingTime = getTimeRemaining(endtime);
        daysSpan.innerHTML = remainingTime.days.toString();
        hoursSpan.innerHTML = ('0' + remainingTime.hours.toString()).slice(-2);
        minutesSpan.innerHTML = ('0' + remainingTime.minutes.toString()).slice(-2);
        secondsSpan.innerHTML = ('0' + remainingTime.seconds.toString()).slice(-2);
        if (remainingTime.total <= 0) {
            clearInterval(interval);
        }
    }
    updateClock();
    let interval = setInterval(updateClock, 1000);
}

// Setting the date we're counting down to
let deadline = 'January 01 2024';
initializeClock('clock', deadline);
