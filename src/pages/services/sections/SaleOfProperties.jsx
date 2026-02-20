function SaleOfProperties({ id, title }) {
  return (
    <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
      <h2 className="fw-bold">{title}</h2>
      <ul>
        <li>Apartment Flats</li>
        <li>Villas</li>
      </ul>
      <hr />
    </div>
  );
}
export default SaleOfProperties