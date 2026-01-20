const Welcome = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>Solar Energy Planning & Decision Support System</h1>

      <p>
        This platform helps users evaluate whether solar energy is suitable
        for their location, how much solar capacity they need, and how
        financially beneficial it can be — before making any investment.
      </p>

      <h2>What This Platform Does</h2>
      <ul>
        <li>Analyzes location-based solar feasibility</li>
        <li>Estimates energy requirements</li>
        <li>Calculates cost savings and subsidies</li>
        <li>Provides rooftop and maintenance guidance</li>
      </ul>

      <p>
        This is a planning and decision-making system — not an installation tool.
      </p>
    </div>
  );
};

export default Welcome;
