export default function ServiceSection({ item }) {
    return (
      <section id={item.id} className="service-section">
        <div className="service-section-grid">
          {/* Left content */}
          <div className="service-section-content">
            <h2>{item.title}</h2>
            <p className="muted">{item.subtitle}</p>
  
            <div className="chips">
              {item.includes.map((x, i) => (
                <span key={i} className="chip">
                  ✓ {x}
                </span>
              ))}
            </div>
  
            <div className="quality-box">
              <h3>{item.qualityTitle}</h3>
              <ul>
                {item.qualityPoints.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Right image */}
          <div className="service-section-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      </section>
    );
  }