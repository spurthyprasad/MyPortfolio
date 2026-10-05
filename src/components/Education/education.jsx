const education = [
  { years: "2021 – 2023", degree: "Master of Computer Applications", school: "BMSIT&M, Bengaluru" },
  { years: "2018 – 2021", degree: "Bachelor of Computer Applications", school: "SDM Degree College, Ujire" },
];

export default function Education() {
  return (
    <section className="pf-block" id="education">
      <header>
        <span className="pf-label">Learning</span>
        <h2>Education</h2>
      </header>
      <ol className="pf-timeline">
        {education.map((e) => (
          <li key={e.degree}>
            <span className="pf-label">{e.years}</span>
            <div>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
