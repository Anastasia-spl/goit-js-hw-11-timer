import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerOutputRef = document.querySelector(`${this.selector}`);
    }
    
    startTimer() {
        const nullifiedTimer = this.formatTimeRecord(0);
        this.updateTimerFace(this.timerOutputRef, nullifiedTimer);

        const targetTime = this.targetDate.getTime();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const timer = this.formatTimeRecord(deltaTime);
            this.updateTimerFace(this.timerOutputRef, timer);
        }, 1000);
    }

    formatTimeRecord(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs};
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateTimerFace(timerFaceRef, { days, hours, mins, secs }) {
        timerFaceRef.querySelector('span[data-value="days"]').textContent = days;
        timerFaceRef.querySelector('span[data-value="hours"]').textContent = hours;
        timerFaceRef.querySelector('span[data-value="mins"]').textContent = mins;
        timerFaceRef.querySelector('span[data-value="secs"]').textContent = secs;
    }
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