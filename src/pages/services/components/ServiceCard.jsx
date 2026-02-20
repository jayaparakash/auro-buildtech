import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-img">
        <img src={service.img} alt={service.title} />
        {service.badge && <span className="badge">{service.badge}</span>}
      </div>

      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>

        <div className="service-actions">
          <Link className="btn-primary" to={service.path}>
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}