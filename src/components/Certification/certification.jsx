const certifications = [
  { title: "Digital Transformation with Google Cloud", by: "Google · Jan 2026", id: "21862152" },
  { title: "Exploring Data Transformation with Google Cloud", by: "Google · Jan 2026", id: "21862164" },
  { title: "Java Full Stack Certification", by: "Pentagon Space, Bengaluru" },
  { title: "LTIMindtree IGNITE Training Program" },
  { title: "UI/UX Design", by: "Internshala · 2023" },
  { title: "Introduction to JavaScript", by: "Coursera · 2021" },
];

const facultyDevelopment = [
  { title: "How Teachers Can Make a Difference", by: "Teaching Learning Center, IIT Madras · Nov 2025" },
  { title: "Code to Cognition: AI with Python, ML and Deep Learning", by: "Dept. of MCA, NMIT, Bengaluru · Sept 2025" },
  { title: "Research Methodology and Data Analysis", by: "Karnataka Science and Technology Academy · Nov 2024" },
];

function CertList({ items }) {
  return (
    <ul className="pf-certs">
      {items.map((c) => (
        <li className="pf-cert" key={c.title}>
          <div>
            <div className="pf-cert-t">{c.title}</div>
            {c.by && <div className="pf-cert-s">{c.by}</div>}
          </div>
          {c.id && <span className="pf-cert-id">ID {c.id}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function CertificationsPage() {
  return (
    <section className="pf-block" id="credentials">
      <header>
        <span className="pf-label">Credentials</span>
        <h2>Certifications</h2>
      </header>
      <div>
        <CertList items={certifications} />
        <p className="pf-label pf-subhead">Faculty development</p>
        <CertList items={facultyDevelopment} />
      </div>
    </section>
  );
}
