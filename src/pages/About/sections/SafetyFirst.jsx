import "./safetyFirst.css";

const cards = [
  {
    icon: "bi bi-shield-check",
    big: "0",
    title: "Lost Time Incidents (2025)",
    desc: "Perfect safety record maintained through rigorous protocols",
  },
  {
    icon: "bi bi-award",
    big: "15+",
    title: "Safety Certifications",
    desc: "Industry-leading safety credentials and training programs",
  },
  {
    icon: "bi bi-people",
    big: "100%",
    title: "Team Training Compliance",
    desc: "Every member receives comprehensive safety education",
  },
  {
    icon: "bi bi-clipboard2-check",
    big: "Daily",
    title: "Safety Inspections",
    desc: "Proactive monitoring ensures continuous compliance",
  },
];

function SafetyFirst() {
  return (
    <section className="sfWrap my-5 text-center">
      <div className="sfHead">
        <h2 className="sfTitle">Safety First, Always</h2>
        <p className="sfSub">
          Our commitment to safety goes beyond compliance—it&apos;s a core value
          that protects our team, our clients, and everyone who steps onto our
          job sites.
        </p>
      </div>

      <div className="sfGrid my-5 ">
        {cards.map((c) => (
          <div className="sfCard text-center"  key={c.title}>
            <div className="sfIcon  text-center">
              <i className={c.icon} />
            </div>
            <div className="sfBig">{c.big}</div>
            <div className="sfCardTitle">{c.title}</div>
            <div className="sfCardDesc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SafetyFirst