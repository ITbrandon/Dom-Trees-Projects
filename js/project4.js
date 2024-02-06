class timerClass {
  constructor(timer, playPause, reset) {
    this.timer = timer;
    this.playPause = playPause;
    this.reset = reset;
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.leadingSeconds = 0;
    this.leadingMinutes = 0;
    this.leadingHours = 0;
    this.status = 'paused';
    this.init();
  }

  init = () => {
    this.playPause.addEventListener('click', this.startPause);
    this.reset.addEventListener('click', this.resetTimer);
  }

  startPause = () => {
    if(this.status == 'paused')
    {
    this.counter = window.setInterval(this.watch, 100);
    this.status = 'countdown';
    this.playPause.innerHTML = '<i class="fas fa-pause">';
    this.playPause.classList.toggle('play');
    this.playPause.classList.toggle('pause');
    }
    else if(this.status == 'countdown')
    {
      window.clearInterval(this.counter);
      this.status = 'paused';
      this.playPause.innerHTML = '<i class="fas fa-play">';
      this.playPause.classList.toggle('play');
      this.playPause.classList.toggle('pause');
    }
  }

  watch = () => {
  this.milliseconds += 100;
  if (this.milliseconds >= 1000) {

  this.seconds++;
  this.milliseconds = 0;

  if (this.seconds === 60) 
  {
    this.minutes++;
    this.seconds = 0;

    if (this.minutes === 60)
    {
      this.hours++;
      this.minutes = 0;
    }
  }
  }
  this.displayTimer();
  }

  displayTimer = () => {

    if(this.seconds < 10) {
      this.leadingSeconds = '0' + this.seconds.toString();
    } else {
      this.leadingSeconds = this.seconds;
    }

    if(this.minutes < 10) {
      this.leadingMinutes = '0' + this.minutes.toString();
    } else {
      this.leadingMinutes = this.minutes;
    }

    if(this.hours < 10) {
      this.leadingHours = '0' + this.hours.toString();
    } else {
      this.leadingHours = this.hours;
    }
  
    this.timer.innerText = this.leadingHours + ':' + this.leadingMinutes + ':' + this.leadingSeconds;

  }

  resetTimer = () => {
    this.timer.innerText = '00:00:00';
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    window.clearInterval(this.counter);
    this.status = 'paused';
    this.playPause.innerHTML = '<i class="fas fa-play">';
    this.playPause.classList.add('play');
    this.playPause.classList.remove('pause');
  }
}

const text = new timerClass(document.querySelector("#timer"), document.querySelector('#play'), document.querySelector('#reset'));