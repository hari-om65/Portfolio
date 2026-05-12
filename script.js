/* ══════════════════════════════════════
   1. PARTICLE / CONSTELLATION BACKGROUND
══════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, dots = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initDots() {
    dots = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      dots.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.2 + 0.3,
        vx:    (Math.random() - 0.5) * 0.2,
        vy:    (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* connections */
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx   = dots[i].x - dots[j].x;
        const dy   = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(0,212,200,${0.07 * (1 - dist / 120)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }

    /* dots */
    dots.forEach(function (d) {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,200,${d.alpha})`;
      ctx.fill();

      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  resize();
  initDots();
  draw();
  window.addEventListener('resize', function () {
    resize();
    initDots();
  });
})();


/* ══════════════════════════════════════
   2. TYPING EFFECT
══════════════════════════════════════ */
(function () {
  const roles = [
    'ML Engineer',
    'Full Stack Developer',
    'Open Source Contributor',
    'Cybersecurity Enthusiast',
  ];

  const el       = document.getElementById('typed-role');
  let ri         = 0;
  let ci         = 0;
  let deleting   = false;

  function type() {
    const word = roles[ri];

    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);

      if (ci === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 70);

    } else {
      ci--;
      el.textContent = word.slice(0, ci);

      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 38);
    }
  }

  setTimeout(type, 1000);
})();


/* ══════════════════════════════════════
   3. ACTIVE NAV LINK ON SCROLL
══════════════════════════════════════ */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 90) {
        current = sec.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
})();
