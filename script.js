document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // Header scroll effect
  // -------------------------
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }
  });

  // -------------------------
  // Canvas animado con burbujas
  // -------------------------
  const canvas = document.createElement("canvas");
  canvas.id = "backgroundCanvas";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = [
    "rgba(241,128,63,0.3)",
    "rgba(255,184,108,0.3)",
    "rgba(255,140,180,0.3)",
    "rgba(180,220,255,0.3)",
    "rgba(180,255,200,0.3)"
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

  // -------------------------
  // Gestión de usuarios (DOM)
  // -------------------------
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista-usuarios");

  if (formulario && lista) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const rol = document.getElementById("rol").value;

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("usuario");

      const contenido = document.createElement("p");
      contenido.textContent = `👤 ${nombre} - ${rol}`;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("boton-eliminar");

      botonEliminar.addEventListener("click", () => tarjeta.remove());

      tarjeta.appendChild(contenido);
      tarjeta.appendChild(botonEliminar);
      lista.appendChild(tarjeta);

      formulario.reset();
    });
  }
});
