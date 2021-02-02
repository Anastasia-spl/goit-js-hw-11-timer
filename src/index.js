import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    
    startTimer() {
        const timerOutputRef = document.querySelector(`${this.selector}`);
        updateClockFace(0, timerOutputRef);
        const targetTime = this.targetDate.getTime();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            updateClockFace(deltaTime, timerOutputRef);
        }, 1000);
    }
}

function updateClockFace(time, timerFaceRef) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    timerFaceRef.querySelector('span[data-value="days"]').textContent = days;
    timerFaceRef.querySelector('span[data-value="hours"]').textContent = hours;
    timerFaceRef.querySelector('span[data-value="mins"]').textContent = mins;
    timerFaceRef.querySelector('span[data-value="secs"]').textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

const summerTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});

const springTimer = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('March 1, 2021'),
});

summerTimer.startTimer();
springTimer.startTimer();