 function InteriorSolutions({ id, title }) {
  return (
    <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
      <h2 className="fw-bold">{title}</h2>
      <ul>
        <li>Residential Interiors</li>
        <li>Commercial & Specialized Interiors</li>
      </ul>
      <hr />
    </div>
  );
}

export default InteriorSolutions