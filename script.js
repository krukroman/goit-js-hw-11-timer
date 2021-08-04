class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.secs = document.querySelector('[data-value="secs"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.days = document.querySelector('[data-value="days"]');
  }

  action() {
    setInterval(() => {
      let currentDate = new Date();
      const time = this.targetDate - currentDate;
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.secs.textContent = secs < 10 ? `0${secs}` : secs;
      this.mins.textContent = mins < 10 ? `0${mins}` : mins;
      this.hours.textContent = hours < 10 ? `0${hours}` : hours;
      this.days.textContent = days < 10 ? `0${days}` : days;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 08, 2021'),
});

timer.action();
