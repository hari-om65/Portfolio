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

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Thank you! Your message has been sent.');
  e.target.reset();
});
