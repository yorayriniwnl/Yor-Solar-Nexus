import { Link } from "react-router-dom";

function Feasibility() {
  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Location-Based Feasibility Check</h1>

      <p>
        Enter your location below. The system will internally analyze the
        smallest possible unit (area / zone) to evaluate solar feasibility.
      </p>

      <label>
        <strong>Location</strong>
        <br />
        <input
          type="text"
          placeholder="Enter city, area, or PIN code"
          style={{ width: "100%", padding: "10px", marginTop: "8px" }}
        />
      </label>

      <p style={{ marginTop: "12px", fontSize: "14px", color: "#555" }}>
        * Detailed environmental and rooftop factors will be considered
        internally by the system.
      </p>

      <br />

      <Link to="/result">
        <button style={{ padding: "10px 20px" }}>
          Analyze Feasibility
        </button>
      </Link>
    </div>
  );
}

export default Feasibility;
