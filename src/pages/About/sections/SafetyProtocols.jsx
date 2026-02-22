import "./safetyProtocols.css";

const protocols = [
  {
    icon: "bi bi-clipboard-check",
    title: "Pre-Project Safety Planning",
    desc: "Comprehensive risk assessment and mitigation strategies developed before work begins",
  },
  {
    icon: "bi bi-chat-square-dots",
    title: "Daily Safety Briefings",
    desc: "Morning toolbox talks address site-specific hazards and reinforce best practices",
  },
  {
    icon: "bi bi-cone-striped",
    title: "Personal Protective Equipment",
    desc: "Top-quality PPE provided and mandatory for all personnel on every job site",
  },
  {
    icon: "bi bi-tv",
    title: "Continuous Monitoring",
    desc: "Dedicated safety officers and ongoing inspections throughout the build lifecycle",
  },
];

function SafetyProtocols() {
  return (
    <section className="spWrap my-5 text-center">
      <h2 className="spTitle">Our Safety Protocols</h2>

      <div className="spGrid">
        {/* LEFT LIST */}
        <div className="spLeft">
          {protocols.map((p) => (
            <div className="spItem" key={p.title}>
              <div className="spItemIcon">
                <i className={p.icon} />
              </div>
              <div className="spItemText">
                <div className="spItemTitle">{p.title}</div>
                <div className="spItemDesc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="spRight">
          <div className="spImgCard">
            <img
              src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Safety on site"
            />
            <div className="spOverlay">
              <div className="spOverlayTitle">Safety is Non-Negotiable</div>
              <div className="spOverlaySub">Every person goes home safe, every day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetyProtocols