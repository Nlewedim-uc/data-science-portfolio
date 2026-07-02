
// // THEME TOGGLE
// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'light') {
//   body.classList.add('light-mode');
//   themeToggle.textContent = '🌙';
// }

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('light-mode');
//   const isLight = body.classList.contains('light-mode');
//   themeToggle.textContent = isLight? '🌙' : '☀';
//   localStorage.setItem('theme', isLight? 'light' : 'dark');
// });


// // MOBILE MENU 
// const menuToggle = document.getElementById('menuToggle');
// const mobileMenu = document.getElementById('mobileMenu');

// menuToggle.addEventListener('click', () => {
//   mobileMenu.classList.toggle('active');
//   // Toggle between hamburger and X
//   menuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
// });

// // CLOSE MENU WHEN LINK CLICKED
// document.querySelectorAll('.mobile-menu a').forEach(link => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
//     menuToggle.textContent = '☰';
//   });
// });



// // TYPING ANIMATION
// const roles = [
//   "Data Scientist",
//   "Machine Learning Engineer",
//   "Python Developer",
//   "SQL Analyst",
//   "AI Researcher"
// ];

// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typedRole = document.getElementById('typed-role');

// function typeRole() {
//   const currentRole = roles[roleIndex];
//   if (isDeleting) {
//     typedRole.textContent = currentRole.substring(0, charIndex--);
//   } else {
//     typedRole.textContent = currentRole.substring(0, charIndex++);
//   }

//   if (!isDeleting && charIndex === currentRole.length) {
//     setTimeout(() => isDeleting = true, 2000);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     roleIndex = (roleIndex + 1) % roles.length;
//   }

//   setTimeout(typeRole, isDeleting? 50 : 100);
// }
// typeRole();

// // PORTFOLIO FILTER
// const filterTabs = document.querySelectorAll('.filter-tab');
// const projectCards = document.querySelectorAll('.project-card');

// filterTabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     filterTabs.forEach(t => t.classList.remove('active'));
//     tab.classList.add('active');

//     const filter = tab.dataset.filter;
//     projectCards.forEach(card => {
//       if (filter === 'all' || card.dataset.category === filter) {
//         card.style.display = 'block';
//       } else {
//         card.style.display = 'none';
//       }
//     });
//   });
// });

// // SCROLL ANIMATIONS
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, { threshold: 0.1 });

// document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// // ================================
// // PROJECT CARDS
// // ================================;

// // Prevent project links from opening the modal
// // document.querySelectorAll(".project-links a").forEach(link => {
// //     link.addEventListener("click", (e) => {
// //         e.stopPropagation();
// //     });
// // });

// // ================================
// // MODAL
// // ================================
// const modal = document.getElementById("projectModal");
// const modalBody = document.getElementById("modalBody");
// const modalClose = document.getElementById("modalClose");

// const projectData = {
//     1: {
//         title: "Predictive Churn Model",
//         problem:
//             "SaaS platform losing 5% of users monthly with no early warning system.",
//         approach:
//             "Built an XGBoost ensemble with 200+ engineered features. Used SHAP for explainability and deployed the model through an Airflow pipeline that generated daily predictions.",
//         stack: [
//             "XGBoost",
//             "SHAP",
//             "Airflow",
//             "PostgreSQL",
//             "Docker"
//         ],
//         impact:
//             "+32% retention lift, saving approximately $1.2M in annual recurring revenue. The model serves over 50,000 predictions every day with a 94.2% AUC."
//     },

//     2: {
//         title: "Sentiment Analysis Pipeline",
//         problem:
//             "The product team manually analyzed more than 1.2 million customer reviews every year.",
//         approach:
//             "Fine-tuned a BERT model on domain-specific data and deployed it using a Kafka streaming pipeline with a real-time dashboard.",
//         stack: [
//             "Transformers",
//             "PyTorch",
//             "Kafka",
//             "Elasticsearch",
//             "FastAPI"
//         ],
//         impact:
//             "Achieved a 94% F1 score while reducing review analysis time from two weeks to fifteen minutes."
//     },

//     3: {
//         title: "Quality Control Automation",
//         problem:
//             "Manual inspection caused defects to escape into production.",
//         approach:
//             "Developed a YOLOv8 computer vision system running on edge devices for real-time defect detection at 30 FPS.",
//         stack: [
//             "PyTorch",
//             "YOLO",
//             "OpenCV",
//             "ONNX",
//             "NVIDIA Jetson"
//         ],
//         impact:
//             "Reached 99.1% detection accuracy and reduced defect escape rates from 3% to 0.2%, saving roughly $400K annually."
//     },

//     4: {
//         title: "A/B Testing Framework",
//         problem:
//             "Analysts spent hours manually evaluating experiments using inconsistent statistical methods.",
//         approach:
//             "Built an internal experimentation platform featuring CUPED variance reduction, automated power analysis, and Bayesian stopping rules.",
//         stack: [
//             "Python",
//             "Streamlit",
//             "Statsmodels",
//             "BigQuery"
//         ],
//         impact:
//             "Supported over 200 experiments while increasing decision speed by 40% and standardizing statistical analysis across teams."
//     }
// };

// // ================================
// // OPEN MODAL
// // ================================
// projectCards.forEach(card => {

//     card.addEventListener("click", () => {

//         const projectId = card.dataset.project;
//         const data = projectData[projectId];

//         if (!data) return;

//         modalBody.innerHTML = `
//             <h2>${data.title}</h2>

//             <div class="case-section">
//                 <h4>Problem</h4>
//                 <p>${data.problem}</p>
//             </div>

//             <div class="case-section">
//                 <h4>Approach</h4>
//                 <p>${data.approach}</p>
//             </div>

//             <div class="case-section">
//                 <h4>Tech Stack</h4>

//                 <div class="tech-stack">
//                     ${data.stack
//                         .map(tech => `<span class="tag">${tech}</span>`)
//                         .join("")}
//                 </div>
//             </div>

//             <div class="case-section">
//                 <h4>Impact</h4>
//                 <p><strong>${data.impact}</strong></p>
//             </div>
//         `;

//         modal.classList.add("active");

//     });

// });

// // ================================
// // CLOSE MODAL
// // ================================
// if (modal && modalClose && modalBody) {

//     modalClose.addEventListener("click", () => {
//         modal.classList.remove("active");
//     });

//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) {
//             modal.classList.remove("active");
//         }
//     });

//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape" && modal.classList.contains("active")) {
//             modal.classList.remove("active");
//         }
//     });

//         // Close with Escape key
//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape" && modal.classList.contains("active")) {
//             modal.classList.remove("active");
//         }
//     });

// }


// // FORM
// // const contactForm = document.getElementById('contactForm');
// // const toast = document.getElementById('toast');

// // contactForm.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   toast.classList.add('show');
// //   setTimeout(() => toast.classList.remove('show'), 3000);
// //   contactForm.reset();
// // });

// const contactForm = document.getElementById("contactForm");
// const submitBtn = document.getElementById("submitBtn");
// const toast = document.getElementById("toast");

// contactForm.addEventListener("submit", async (e) => {

//     e.preventDefault();

//     submitBtn.disabled = true;
//     submitBtn.textContent = "Sending...";

//     try {

//         const response = await fetch(contactForm.action, {

//             method: "POST",

//             body: new FormData(contactForm),

//             headers: {
//                 Accept: "application/json"
//             }

//         });

//         if (response.ok) {

//             toast.textContent = "✅ Message sent successfully!";
//             toast.classList.add("show");

//             contactForm.reset();

//         } else {

//             toast.textContent = "❌ Something went wrong.";

//             toast.classList.add("show");

//         }

//     } catch {

//         toast.textContent = "❌ Network error.";

//         toast.classList.add("show");

//     }

//     submitBtn.disabled = false;
//     submitBtn.textContent = "Send Message";

//     setTimeout(() => {

//         toast.classList.remove("show");

//     },3000);

// });
