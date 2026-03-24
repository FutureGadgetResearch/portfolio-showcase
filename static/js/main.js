/* ============================================================
   FUTURE GADGET LABS — main.js
   ============================================================ */

// --- Nav scroll class ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- Grid canvas background ---
(function initGrid() {
  const canvas = document.getElementById('gridCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const CELL = 60;
  const nodes = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initNodes();
  }

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < 18; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.06)';
    ctx.lineWidth = 1;
    const ox = (W % CELL) / 2;
    const oy = (H % CELL) / 2;
    ctx.beginPath();
    for (let x = ox; x < W; x += CELL) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    for (let y = oy; y < H; y += CELL) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 220)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Dots
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${n.alpha})`;
      ctx.fill();
    });
  }

  function update() {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
  }

  let raf;
  function loop() { update(); draw(); raf = requestAnimationFrame(loop); }

  const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); resize(); loop(); });
  ro.observe(canvas.parentElement);

  resize();
  loop();
})();
