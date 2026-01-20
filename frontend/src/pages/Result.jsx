import { Link } from "react-router-dom";

function Result() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Feasibility Result</h1>

      <p>
        Feasibility Score: <strong>Coming Soon</strong>
      </p>

      <p>This page will later show solar suitability analysis.</p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Result;
