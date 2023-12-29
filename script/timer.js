const declOfNum = (n, titles) => {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ? 
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}


const timer = () => {
  const timer = document.createElement('div');
  const timerText = document.createElement('p');
  const timerCount = document.createElement('span');

  timer.classList.add('timer');
  timerText.classList.add('timer-text');
  timerCount.classList.add('timer-count');

  timerText.textContent = 'До конца распродажи осталось: ';

  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {
    const deadline = new Date(2024, 0, 1, 0, 0, 0);
    const now = new Date();
    const timeRemaining = (deadline - now) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24 % 30);
    const hours = Math.floor(timeRemaining / 60 / 60 % 24);
    const minutes = Math.floor(timeRemaining / 60  % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const d = declOfNum(days, ['день', ' дня', 'дней']);
    const h = declOfNum(hours, ['час', ' часа', 'часов']);
    const m = declOfNum(minutes, ['минута', ' минуты', 'минут']);
    const s = declOfNum(seconds, ['секунда', ' секунды', 'секунд']);

    timerCount.textContent = `${d} ${h} ${m} ${s}`;

    if (timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
    
  }

  startTimer();
}

timer();