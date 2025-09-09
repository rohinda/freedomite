// Preloader logic
window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700);
  }, 2200); // 2.2 seconds for smooth fade
});

// Smooth scroll for CTA button
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const latestIssue = document.getElementById('latest-issue');
    if (latestIssue) {
      latestIssue.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// AI Assistant placeholder interaction
const aiAssistant = document.getElementById('ai-assistant');
aiAssistant.addEventListener('click', () => {
  alert('AI Assistant coming soon! Here you can ask about events or newsletter details.');
});

// Edition PDF switcher logic
document.addEventListener('DOMContentLoaded', function() {
  const pdfViewer = document.getElementById('pdf-viewer');
  const editionBtns = document.querySelectorAll('.edition-btn');
  editionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      editionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const pdf = btn.getAttribute('data-pdf');
      pdfViewer.src = pdf;
    });
  });
  // Set initial active button
  if (editionBtns.length) editionBtns[0].classList.add('active');
});

// Animated background particles/stars
function animateBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  // Generate stars/particles
  const particles = Array.from({length: 80}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.15,
    dy: (Math.random() - 0.5) * 0.15,
    color: Math.random() > 0.5 ? 'rgba(26,42,79,0.7)' : 'rgba(123,31,43,0.7)'
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      p.x += p.dx;
      p.y += p.dy;
      // Wrap around edges
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}

window.addEventListener('DOMContentLoaded', animateBackground);
