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
            I teach <strong>MERN, Java, Web Technology and ERP</strong> to MCA students, and I build the same
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
            I am an Assistant Professor in the Department of Master of Computer Applications (MCA) at BMS Institute of
Technology and Management, Bengaluru. With a strong academic foundation complemented by industry exposure,
I strive to bridge the gap between theoretical concepts and real-world technological applications. My teaching
philosophy centers around experiential and project-based learning, enabling students to design, develop, and
deploy scalable software solutions. I integrate modern software engineering practices into the classroom and
encourage students to think critically, innovate confidently, and build industry-ready applications.
My core expertise lies in Full Stack Development (MERN Stack), Java Full Stack Development , Database
Systems, and Cloud Computing. I am particularly passionate about exploring how Machine Learning and Cloud
technologies can be integrated into intelligent, scalable web systems. I actively participate in Faculty Development
Programs conducted by premier institutions such as IIT Madras and continuously upgrade my technical expertise
through certifications from Google Cloud and leading industry organizations.
          </p>
        </div>
      </section>
    </>
  );
}
