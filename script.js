// Set the event date (YYYY, MM, DD, HH, MM, SS)
const eventDate = new Date('2023-12-31T23:59:59').getTime();

const timer = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = eventDate - currentDate;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    } else {
        document.getElementById('timer').innerHTML = 'Event has started!';
        clearInterval(timer);
    }
}, 1000);
