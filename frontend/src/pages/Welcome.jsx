import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Solar Energy Planning & Decision Support System
        
      <br />~By Ayush And Nivedanakataki

      </h1>

      <p>
        This platform helps users evaluate solar feasibility before investment.
      </p>

      <Link to="/feasibility">
        <button>Start Feasibility Check</button>
      </Link>
    </div>
  );
}

export default Welcome;
