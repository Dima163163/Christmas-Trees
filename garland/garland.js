const garlandInit = () => {
  const style = document.createElement('style');

  const elka = document.createElement('div');
  elka.classList.add('garland-elka');

  const garland = document.createElement('div');
  garland.classList.add('garland', 'garland_1');

  document.head.append(style);
  document.body.append(elka);
  document.body.append(garland);
  style.textContent = `
    body: {
      position: relative;
    }

    .garland-elka {
      position: fixed;
      inset: 0;
      background-image: url('garland/elka.png');
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 499;
    }
    .garland {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 36px;
      background-image: url('garland/christmas.png');
      pointer-events: none;
      z-index: 498;
    }

    .garland_1 {
      background-position: 0 0;
    }

    .garland_2 {
      background-position: 0 -36px;
    }

    .garland_3 {
      background-position: 0 -72px;
    }

    .garland_4 {
      background-position: 0 -108px;
    }
  `;

  const garlandClasses = ['garland_1', 'garland_2', 'garland_3', 'garland_4'];

  let currentIndex = 0;
  setInterval(() => {
    const prevIndex = currentIndex;
    while (prevIndex === currentIndex) {
      currentIndex = Math.round(Math.random() * garlandClasses.length - 1);
    }

    garland.classList.remove(garlandClasses[prevIndex]);
    garland.classList.add(garlandClasses[currentIndex]);
  },300)
};

garlandInit();
