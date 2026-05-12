// Floating Particles
const particles = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (Math.random() * 15 + 10) + 's';
  p.style.animationDelay = Math.random() * 10 + 's';
  particles.appendChild(p);
}

// Typing Animation
const roles = [
  "AI/ML Engineer",
  "Scientific ML Researcher",
  "Backend Developer",
  "Open Source Contributor"
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[roleIdx];
  if (deleting) {
    typedEl.textContent = current.substring(0, charIdx--);
    if (charIdx < 0) { deleting = false; roleIdx = (roleIdx+1) % roles.length; }
    setTimeout(type, 60);
  } else {
    typedEl.textContent = current.substring(0, charIdx++);
    if (charIdx > current.length) { deleting = true; setTimeout(type, 1800); return; }
    setTimeout(type, 100);
  }
}
type();

// Active nav on scroll
const sections = document.querySelectorAll('.hero, .section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.querySelector('input[type="text"]').value;
  alert(`Thanks ${name}! 🚀 Your message was received. I'll reply within 24 hours.`);
  e.target.reset();
});
