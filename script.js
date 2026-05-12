// =========================
// script.js
// =========================

// Smooth reveal animation

const hero = document.querySelector(".hero-content");

window.addEventListener("load", () => {
  hero.style.opacity = "0";
  hero.style.transform = "translateY(40px)";

  setTimeout(() => {
    hero.style.transition = "1.2s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
});

// Mouse glow effect

document.addEventListener("mousemove", (e) => {

  const glow = document.createElement("div");

  glow.className = "cursor-glow";

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 500);

});
