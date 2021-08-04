const path = document.querySelector("path");

let coords = {
  x: 0,
  y: 0,
};

let width = 0;

document.addEventListener("mousemove", (event) => {
  coords.x = event.clientX;
  coords.y = event.clientY;
  document.querySelector(".title").style.color = "orangered";
  path.style.stroke = "orangered";
  width = coords.x / window.innerWidth;

  updateCoords(coords);
});

document.addEventListener("mouseout", (event) => {
  gsap.to(path, {
    ease: Elastic.easeOut.config(1, 0.3),
    attr: { d: "M250,0 Q250,250 250,500" },
  });
  pluck();
  document.querySelector(".title").style.color = "orange";
  path.style.stroke = "orange";
  document.querySelector(".title").style.transition = "1000ms ease";
});

function updateCoords(coords) {
  coords.x = width * 500;
  path.setAttribute("d", `M250,0 Q${coords.x},${coords.y} 250,500`);
}

function pluck() {
  let audio = new Audio("Sounds/sfx-boing4.mp3");
  audio.play();
}
