import { Link } from "react-router-dom";

function Result() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Feasibility Analysis Result</h1>

      <p>
        Based on the entered location and electricity usage data,
        the system has analyzed solar feasibility.
      </p>

      <p>
        <strong>Feasibility Score:</strong> Coming Soon
      </p>

      <p>
        Energy demand estimation and cost-benefit analysis will be
        displayed here in future versions.
      </p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Result;
