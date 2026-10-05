const projects = [
  {
    title: "InteliCrop",
    meta: "MCA final year · Jun – Aug 2023",
    metric: "95%",
    metricLabel: "accuracy",
    text: "An ensemble machine learning system that predicts suitable crops. Feature engineering and model aggregation turn raw data into decisions, and the work contributed to a 40% improvement in agricultural yield decisions. Published in IJSREM, Vol. 07, Issue 08, Aug 2023.",
    tags: [{ name: "Published", hl: true }, { name: "Ensemble ML" }, { name: "Python" }],
  },
  {
    title: "Student Counselling Management System",
    meta: "BMSIT · Jul – Oct 2022",
    metric: "20%",
    metricLabel: "satisfaction",
    text: "A full-stack web application that connects students and counsellors in real time. I designed the communication between modules. User satisfaction rose 20% and process time dropped 15%.",
    tags: [{ name: "Full stack" }, { name: "Real-time" }],
  },
  {
    title: "Food Ordering Website",
    meta: "Client project · Apr – Sep 2021",
    metric: "25%",
    metricLabel: "engagement",
    text: "I led the front end in HTML, CSS and JavaScript, and wrote PHP back-end modules with order tracking. The back end ran 30% faster. Certified by Mangalore University.",
    tags: [{ name: "HTML/CSS" }, { name: "JavaScript" }, { name: "PHP" }],
  },
  {
    title: "Rainfall Prediction",
    meta: "Machine learning research · 2023",
    metric: "D.K.",
    metricLabel: "Dakshina Kannada",
    text: "Predictive analysis of rainfall patterns in Dakshina Kannada using machine learning methods on historical data.",
    tags: [{ name: "Machine learning" }, { name: "Time series" }],
  },
];

export default function Project() {
  return (
    <section className="pf-block" id="projects">
      <header>
        <span className="pf-label">Selected</span>
        <h2>Projects and research</h2>
      </header>
      <div className="pf-projects">
        {projects.map((p) => (
          <article className="pf-card" key={p.title}>
            <div className="pf-card-top">
              <div>
                <p className="pf-label">{p.meta}</p>
                <h3>{p.title}</h3>
              </div>
              <div className="pf-metric">
                {p.metric}
                <small>{p.metricLabel}</small>
              </div>
            </div>
            <p>{p.text}</p>
            <div className="pf-chips">
              {p.tags.map((t) => (
                <span key={t.name} className={t.hl ? "pf-chip pf-chip-hl" : "pf-chip"}>
                  {t.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
