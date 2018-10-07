const container = document.querySelector("#banner");

let counter = 0;

function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 2000,
    fill: "forwards"
  });
  if (counter === 4) {
    counter = -1;
  }

  counter++;
  container.style.backgroundImage = `url(img/bg-${counter}.jpeg)`;
}

setInterval(nextSlide, 6000);
