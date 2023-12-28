const getRandomIntInclusive = (n, m) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const createSnow = (min, max, saturation) => {
  const style = document.createElement('style');
  document.head.append(style);

  style.textContent = `
    body: {
      position: relative;
    }

    .snow {
      position: fixed;
      width: 20px;
      height: 20px;
      top: -20px;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
      animation-name: fall;
      animation-timing-function: linear;
    }

    @keyframes fall {
      100% {
        transform: translateY(100vh);
      }
    }
  `;

  const count = 4;

  const createSnowItem = () => {
    const snowItem = document.createElement('div');
    snowItem.classList.add('snow');
    const time = getRandomIntInclusive(min, max);

    snowItem.style.cssText = `
      left: ${getRandomIntInclusive(0, 100)}%;
      background-image: url('/snow/snowflake${getRandomIntInclusive(1, count)}.svg');
      animation-duration: ${time}s;
    `;

    document.body.append(snowItem);

    setTimeout(() => {
      snowItem.remove();
    }, time * 1000);
  }
  setInterval(createSnowItem, saturation);
};

createSnow(5, 20, 100);