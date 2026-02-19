export default function LayoutDevelopment({ id, title }) {
    return (
      <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
        <h2 className="fw-bold">{title}</h2>
        <ul>
          <li>Commercial Plots</li>
          <li>Residential Plots</li>
        </ul>
        <hr />
      </div>
    );
  }
  