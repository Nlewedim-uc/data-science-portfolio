/*======================================
  PORTFOLIO DATA REFERENCE
======================================*/

const projectData = {
  1: {
    title: "Predictive Churn Model",
    problem: "SaaS platform losing 5% of users monthly with no early warning system.",
    approach: "Built an XGBoost ensemble with 200+ engineered features. Used SHAP for explainability and deployed the model through an Airflow pipeline that generated daily predictions.",
    stack: ["XGBoost", "SHAP", "Airflow", "PostgreSQL", "Docker"],
    impact: "+32% retention lift, saving approximately $1.2M in annual recurring revenue. The model serves over 50,000 predictions every day with a 94.2% AUC."
  },
  2: {
    title: "Sentiment Analysis Pipeline",
    problem: "The product team manually analyzed more than 1.2 million customer reviews every year.",
    approach: "Fine-tuned a BERT model on domain-specific data and deployed it using a Kafka streaming pipeline with a real-time dashboard.",
    stack: ["Transformers", "PyTorch", "Kafka", "Elasticsearch", "FastAPI"],
    impact: "Achieved a 94% F1 score while reducing review analysis time from two weeks to fifteen minutes."
  },
  3: {
    title: "Quality Control Automation",
    problem: "Manual inspection caused defects to escape into production.",
    approach: "Developed a YOLOv8 computer vision system running on edge devices for real-time defect detection at 30 FPS.",
    stack: ["PyTorch", "YOLO", "OpenCV", "ONNX", "NVIDIA Jetson"],
    impact: "Reached 99.1% detection accuracy and reduced defect escape rates from 3% to 0.2%, saving roughly $400K annually."
  },
  4: {
    title: "A/B Testing Framework",
    problem: "Analysts spent hours manually evaluating experiments using inconsistent statistical methods.",
    approach: "Built an internal experimentation platform featuring CUPED variance reduction, automated power analysis, and Bayesian stopping rules.",
    stack: ["Python", "Streamlit", "Statsmodels", "BigQuery"],
    impact: "Supported over 200 experiments while increasing decision speed by 40% and standardizing statistical analysis across teams."
  }
};

/*======================================
  PORTFOLIO RUNTIME FILTER
======================================*/

const filterTabs = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/*======================================
  MODAL CONTROLLER SYSTEM
======================================*/

const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

projectCards.forEach(card => {
  card.addEventListener("click", (e) => {
    // Intercept clicks coming directly from link tags within cards
    if (e.target.closest('.project-links a')) return;

    const projectId = card.dataset.project;
    const data = projectData[projectId];

    if (!data) return;

    modalBody.innerHTML = `
      <h2>${data.title}</h2>
      <div class="case-section">
        <h4>Problem</h4>
        <p>${data.problem}</p>
      </div>
      <div class="case-section">
        <h4>Approach</h4>
        <p>${data.approach}</p>
      </div>
      <div class="case-section">
        <h4>Tech Stack</h4>
        <div class="tech-stack">
          ${data.stack.map(tech => `<span class="tag">${tech}</span>`).join("")}
        </div>
      </div>
      <div class="case-section">
        <h4>Impact</h4>
        <p><strong>${data.impact}</strong></p>
      </div>
    `;
    modal.classList.add("active");
  });
});

if (modal && modalClose && modalBody) {
  const closeModal = () => modal.classList.remove("active");

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}