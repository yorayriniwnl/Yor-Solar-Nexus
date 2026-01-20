import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Left */}
      <div style={styles.left}>
        <Link to="/" style={styles.brand}>
          Solar Nexus
        </Link>
      </div>

      {/* Right */}
      <div style={styles.right}>
        <Link to="/how-to-use" style={styles.link}>How to Use</Link>
        <Link to="/faqs" style={styles.link}>FAQs</Link>
        <Link to="/login" style={styles.loginBtn}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    backgroundColor: "#1e1e1e",
  },
  left: {},
  right: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  brand: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  loginBtn: {
    backgroundColor: "#ffd000",
    color: "black",
    padding: "6px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
