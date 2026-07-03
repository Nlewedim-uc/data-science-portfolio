/*======================================
  HERO TYPING STREAM
======================================*/

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Python Developer",
  "SQL Analyst",
  "AI Researcher"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedRole = document.getElementById('typed-role');

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedRole.textContent = currentRole.substring(0, charIndex--);
  } else {
    typedRole.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeRole, isDeleting ? 50 : 100);
}

// Global initialization call
typeRole();

/*======================================
  INTERSECTION SCROLL EFFECT
======================================*/

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));

