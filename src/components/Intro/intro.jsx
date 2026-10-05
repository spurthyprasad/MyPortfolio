const teaching = [
  { subject: "MERN Stack", note: "full stack" },
  { subject: "Java", note: "core + J2EE" },
  { subject: "Cloud Computing", note: "GCP" },
  { subject: "DBMS Applications", note: "MySQL" },
];

export default function Intro() {
  return (
    <>
      <header className="pf-hero" id="top">
        <div>
          <p className="pf-label">Assistant Professor · Full Stack Developer</p>
          <h1>Spurthy <mark>S N</mark></h1>
          <p className="pf-role">
            I teach <strong>MERN, Java and cloud</strong> to MCA students, and I build the same
            systems myself, from REST APIs to ML models.
          </p>
          <div className="pf-actions">
            <a className="pf-btn pf-btn-primary" href="#projects">See my projects</a>
            <a className="pf-btn" href="#contact">Get in touch</a>
          </div>
          <p className="pf-label pf-where">Bengaluru, India</p>
        </div>

        <aside className="pf-syllabus" aria-label="Currently teaching">
          <p className="pf-label">Department of MCA · BMSIT&amp;M</p>
          <h2>Currently teaching</h2>
          <ul>
            {teaching.map((t) => (
              <li key={t.subject}>
                <span>{t.subject}</span>
                <span>{t.note}</span>
              </li>
            ))}
          </ul>
        </aside>
      </header>

      <section className="pf-block pf-about" id="about">
        <header>
          <span className="pf-label">Profile</span>
          <h2>About</h2>
        </header>
        <div>
          <p>
            I am a full-stack developer who teaches. My work covers MERN and Java/Spring
            applications, REST API design, and machine learning for research projects.
          </p>
          <p>
            I am Google Cloud certified, I coordinate faculty development programmes, and I guide
            students through the whole software lifecycle: design, development, deployment and
            monitoring.
          </p>
        </div>
      </section>
    </>
  );
}
