import { Link } from "react-router-dom";

function Feasibility() {
  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Location & Energy Usage Input</h1>

      <p>
        Enter your location and upload a recent electricity bill.
        The system will internally analyze the smallest geographic unit
        and energy usage pattern.
      </p>

      {/* Location Input */}
      <label>
        <strong>Location</strong>
        <br />
        <input
          type="text"
          placeholder="City / Area / PIN code"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        />
      </label>

      {/* Electricity Bill Upload */}
      <label>
        <strong>Upload Electricity Bill (Image)</strong>
        <br />
        <input
          type="file"
          accept="image/*"
          style={{ marginTop: "8px" }}
        />
      </label>

      <p style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
        * The bill is used to estimate energy consumption. No manual
        calculations are required from the user.
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
