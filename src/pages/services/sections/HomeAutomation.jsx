 function HomeAutomation({ id, title }) {
  return (
    <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
      <h2 className="fw-bold">{title}</h2>
      <ul>
        <li>Safety & Security</li>
        <li>Comfort & Energy Efficiency</li>
      </ul>
      <hr />
    </div>
  );
}

export default HomeAutomation