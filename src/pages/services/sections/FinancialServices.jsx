export default function FinancialServices({ id, title }) {
    return (
      <div id={id} style={{ padding: "60px 0", scrollMarginTop: "95px" }}>
        <h2 className="fw-bold">{title}</h2>
        <ul>
          <li>Best Value Loans</li>
          <li>Project Finance</li>
        </ul>
        <hr />
      </div>
    );
  }
  