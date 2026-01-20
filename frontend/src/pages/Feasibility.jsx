import { Link } from "react-router-dom";

function Feasibility() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Feasibility Input</h1>

      <p>This page will collect location and rooftop details.</p>

      <form>
        <label>
          Location:
          <input type="text" placeholder="City / Area" />
        </label>
        <br /><br />

        <label>
          Roof Area (sq.m):
          <input type="number" />
        </label>
        <br /><br />

        <label>
          Roof Type:
          <select>
            <option>Concrete</option>
            <option>Metal</option>
            <option>Other</option>
          </select>
        </label>
      </form>

      <br />
      <Link to="/result">
        <button>Check Feasibility</button>
      </Link>
    </div>
  );
}

export default Feasibility;
