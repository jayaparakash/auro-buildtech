function Constructions({ id, title }) {
  return (
    <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
      <h2 className="fw-bold">{title}</h2>
      <ul>
        <li>Residential Constructions</li>
        <li>Commercial Build Outs</li>
      </ul>
      <hr />
    </div>
  );
}

export default Constructions

