// ==========================================================
// Jana Ayyad — Portfolio interactions
// ==========================================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navlinks = document.querySelector('.navlinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navlinks.classList.toggle('open');
  });
  // close mobile menu after clicking a link
  navlinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navlinks.classList.remove('open'));
  });
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Copy email on click
const copyEmail = document.getElementById('copyEmail');
if (copyEmail) {
  copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('j.ayyad26@gmail.com').then(() => {
      const span = document.getElementById('emailText');
      const original = span.textContent;
      span.textContent = 'Copied to clipboard ✓';
      setTimeout(() => { span.textContent = original; }, 1800);
    });
  });
}

// Header shadow on scroll
const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
  headerEl.style.boxShadow = window.scrollY > 40 ? '0 8px 30px rgba(0,0,0,0.35)' : 'none';
});

// Scrollspy for the dot navigation
const dotLinks = document.querySelectorAll('.dotnav a');
const spySections = Array.from(dotLinks).map(a => document.querySelector(a.getAttribute('href')));
function updateDotNav() {
  let currentIndex = 0;
  const scrollPos = window.scrollY + window.innerHeight * 0.4;
  spySections.forEach((sec, i) => {
    if (sec && sec.offsetTop <= scrollPos) currentIndex = i;
  });
  dotLinks.forEach((a, i) => a.classList.toggle('active', i === currentIndex));
}
if (dotLinks.length) {
  window.addEventListener('scroll', updateDotNav);
  updateDotNav();
}
