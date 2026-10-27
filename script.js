// Theme: follow the system setting until the visitor picks one with the toggle.
// The saved choice is applied before paint by the inline script in <head>.
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');

// The button names the theme you'd switch to, so its label is always an action.
const syncToggleLabel = () => {
  if (!toggle) return;
  toggle.textContent = currentTheme() === 'dark' ? 'Light' : 'Dark';
};

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: choice lasts this visit */ }
    syncToggleLabel();
  });
}
systemDark.addEventListener('change', syncToggleLabel);
syncToggleLabel();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Back-to-top button: only show it once the visitor has scrolled past roughly one screen.
const toTop = document.querySelector('.to-top');
if (toTop) {
  const syncToTop = () => toTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8);
  window.addEventListener('scroll', syncToTop, { passive: true });
  syncToTop();
}
