// Items with hl: true get the highlighted (indigo) chip style.
const groups = [
  {
    title: "Backend and full stack",
    items: [
      { name: "MERN", hl: true },
      { name: "Java / J2EE", hl: true },
      { name: "Spring" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "PHP" },
      { name: "ASP.NET" },
    ],
  },
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "C", "C++", "C#", "VB.NET", "HTML/CSS"].map((name) => ({ name })),
  },
  {
    title: "Machine learning and data",
    items: [{ name: "Ensemble models", hl: true }, { name: "Predictive analytics" }, { name: "Python" }],
  },
  {
    title: "Cloud and databases",
    items: [{ name: "Google Cloud", hl: true }, { name: "MySQL" }, { name: "DBMS design" }],
  },
  {
    title: "Dev tools",
    items: ["Git", "Postman", "Jira", "SharePoint", "Agile / Scrum"].map((name) => ({ name })),
  },
];

export default function Skills() {
  return (
    <section className="pf-block" id="skills">
      <header>
        <span className="pf-label">Toolkit</span>
        <h2>Skills</h2>
      </header>
      <div className="pf-skills">
        {groups.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <div className="pf-chips">
              {g.items.map((i) => (
                <span key={i.name} className={i.hl ? "pf-chip pf-chip-hl" : "pf-chip"}>
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
