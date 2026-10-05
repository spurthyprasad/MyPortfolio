const highlights = [
  "Teach and mentor students in the MERN stack, Java, cloud computing and DBMS applications.",
  "Lead project-based learning, guiding students through design, development, deployment and monitoring.",
  'Faculty Coordinator for a 5-day FDP on "MATLAB for AI Workflows" with the IEEE Computational Intelligence Society, MathWorks and CoreEL Technologies (Sept 2025).',
  "Run workshops and FDPs on research methodology, data analysis, Python and deep learning.",
];

export default function Works() {
  return (
    <section className="pf-block" id="work">
      <header>
        <span className="pf-label">Experience</span>
        <h2>Work</h2>
      </header>
      <div>
        <div className="pf-role-head">
          <h3>Assistant Professor, Department of MCA</h3>
          <span className="pf-label">2024 – Present</span>
        </div>
        <p className="pf-role-sub">BMSIT&amp;M, Bengaluru</p>
        <ul className="pf-dots">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
