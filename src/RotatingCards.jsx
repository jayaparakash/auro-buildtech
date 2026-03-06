import "./rotating-cards.css";

const cards = [
  {
    id: 1,
    title: "Home Automation",
    text: "Smart lighting, security, and comfort controls.",
  },
  {
    id: 2,
    title: "Security Systems",
    text: "Advanced surveillance and access management.",
  },
  {
    id: 3,
    title: "Climate Control",
    text: "Ventilation and temperature automation solutions.",
  },
  {
    id: 4,
    title: "Energy Monitoring",
    text: "Track and optimize your power usage smartly.",
  },
  {
    id: 5,
    title: "Curtain Control",
    text: "Automated curtain and blind management.",
  },
  {
    id: 6,
    title: "Entertainment",
    text: "Home theatre and immersive media automation.",
  },
];

export default function RotatingCards() {
  const total = cards.length;
  const radius = 320;

  return (
    <section className="rc-section">
      <div className="rc-wrapper">
        <div className="rc-carousel">
          {cards.map((card, index) => {
            const angle = (360 / total) * index;

            return (
              <div
                key={card.id}
                className="rc-card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="rc-card-inner">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}