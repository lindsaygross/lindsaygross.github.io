const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.querySelector('.scroll-top');
const yearEl = document.getElementById('year');
const modeToggleBtn = document.querySelector('.mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = (theme, persist = false) => {
  document.body.dataset.theme = theme;
  if (modeToggleBtn) {
    modeToggleBtn.setAttribute('aria-pressed', theme === 'dark');
    modeToggleBtn.classList.toggle('is-dark', theme === 'dark');
    const icon = modeToggleBtn.querySelector('.mode-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀︎' : '☾';
  }
  if (persist) {
    localStorage.setItem('theme', theme);
  }
};

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
applyTheme(initialTheme);

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const toggleScrollButton = () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
};

toggleScrollButton();
window.addEventListener('scroll', toggleScrollButton);

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (modeToggleBtn) {
  modeToggleBtn.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });
}

prefersDarkScheme.addEventListener('change', (event) => {
  if (localStorage.getItem('theme')) return;
  applyTheme(event.matches ? 'dark' : 'light');
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach((el) => observer.observe(el));
}
