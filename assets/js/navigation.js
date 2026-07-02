/*======================================
  MOBILE FLYOUT & INTERACTIONS
======================================*/

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
});

// Auto-dismiss menu panel on layout routing navigation
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});