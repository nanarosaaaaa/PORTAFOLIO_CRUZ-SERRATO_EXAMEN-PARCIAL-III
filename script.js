 window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Canvas de fondo animado con burbujas de colores pastel
const canvas = document.createElement("canvas");
canvas.id = "backgroundCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Paleta de colores pastel
const colors = [
  "rgba(241,128,63,0.3)",  
  "rgba(255, 184, 108, 0.3)", 
  "rgba(255, 140, 180, 0.3)", 
  "rgba(180, 220, 255, 0.3)", 
  "rgba(180, 255, 200, 0.3)"  
];

const bubbles = Array.from({ length: 50 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 8 + 3,
  d: Math.random() * 0.5 + 0.2,
  color: colors[Math.floor(Math.random() * colors.length)]
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
    bubble.y -= bubble.d;
    if (bubble.y < 0) {
      bubble.y = canvas.height;
      bubble.x = Math.random() * canvas.width;
      bubble.color = colors[Math.floor(Math.random() * colors.length)];
    }
  });
}

setInterval(draw, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
