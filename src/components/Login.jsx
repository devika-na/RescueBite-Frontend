import { useState } from "react";
import {
  FaLeaf,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";
import {
  MdVolunteerActivism
} from "react-icons/md";

function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("donor");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setUser({
      email: email.trim(),
      role: role,
    });
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT SIDE */}

        <div style={styles.leftSection}>

          <div style={styles.heroIcon}>
            🌱
          </div>

          <h1 style={styles.heroTitle}>
            RescueBite AI
          </h1>

          <p style={styles.heroText}>
            AI-powered food rescue platform connecting food donors,
            NGOs, and volunteers to reduce food waste and fight hunger.
          </p>

          <div style={styles.heroCards}>

            <div style={styles.smallCard}>
              🍱 Food Donation
            </div>

            <div style={styles.smallCard}>
              🤝 NGO Matching
            </div>

            <div style={styles.smallCard}>
              🚚 Smart Delivery
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div style={styles.rightSection}>

          <div style={styles.loginCard}>

            <div style={styles.logoContainer}>
              <FaLeaf size={32} color="#16A34A" />
            </div>

            <h2 style={styles.loginTitle}>
              Welcome Back
            </h2>

            <p style={styles.loginSubtitle}>
              Sign in to continue to RescueBite AI
            </p>

            <form onSubmit={handleSubmit}>

              <label style={styles.label} htmlFor="email">
                Email Address
              </label>

              <div style={styles.inputContainer}>

                <FaEnvelope
                  size={18}
                  color="#cccccc"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <label style={styles.label}>
                Select Your Role
              </label>

              <div style={styles.roleGrid} role="radiogroup" aria-label="Select your role">

                <button
                  type="button"
                  role="radio"
                  aria-checked={role === "donor"}
                  style={{
                    ...styles.roleCard,
                    ...(role === "donor" ? styles.selectedRole : {})
                  }}
                  onClick={() => setRole("donor")}
                >
                  <div style={styles.roleEmoji}>
                    🍱
                  </div>

                  <h3 style={styles.roleTitle}>
                    Food Donor
                  </h3>

                  <p style={styles.roleDescription}>
                    Donate surplus food and let our AI find the best NGO.
                  </p>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={role === "ngo"}
                  style={{
                    ...styles.roleCard,
                    ...(role === "ngo" ? styles.selectedRole : {})
                  }}
                  onClick={() => setRole("ngo")}
                >
                  <div style={styles.roleEmoji}>
                    <MdVolunteerActivism
                      size={40}
                      color="#16A34A"
                    />
                  </div>

                  <h3 style={styles.roleTitle}>
                    NGO Receiver
                  </h3>

                  <p style={styles.roleDescription}>
                    Receive food donations matched intelligently by AI.
                  </p>
                </button>

              </div>

              <button
                type="submit"
                style={styles.loginButton}
              >
                Continue
                <FaArrowRight
                  style={{
                    marginLeft: "10px"
                  }}
                />
              </button>

              <p style={styles.bottomText}>
                Don't have an account?
                <span
                  style={styles.register}
                  onClick={() => setPage("register")}
                >
                  {" "}
                  Register
                </span>
              </p>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 50%, #FFFFFF 100%)",
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    padding: "24px",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    width: "100%",
    maxWidth: "1000px",
    minHeight: "600px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(22, 163, 74, 0.15)",
    flexWrap: "wrap",
  },
  leftSection: {
    flex: "1 1 380px",
    background: "linear-gradient(160deg, #16A34A 0%, #15803D 100%)",
    color: "#FFFFFF",
    padding: "48px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "32px",
    fontWeight: 700,
    margin: "0 0 16px 0",
  },
  heroText: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#DCFCE7",
    margin: "0 0 32px 0",
  },
  heroCards: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  smallCard: {
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 500,
  },
  rightSection: {
    flex: "1 1 380px",
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  loginCard: {
    width: "100%",
    maxWidth: "380px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
    textAlign: "center",
    margin: "0 0 4px 0",
  },
  loginSubtitle: {
    fontSize: "14px",
    color: "#6B7280",
    textAlign: "center",
    margin: "0 0 28px 0",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "8px",
    marginTop: "18px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1.5px solid #D1D5DB",
    borderRadius: "10px",
    padding: "10px 14px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "#111827",
  },
  roleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  roleCard: {
    border: "1.5px solid #E5E7EB",
    borderRadius: "12px",
    padding: "16px 12px",
    textAlign: "center",
    cursor: "pointer",
    background: "#FFFFFF",
    fontFamily: "inherit",
    transition: "border-color 0.15s ease, background 0.15s ease",
  },
  selectedRole: {
    border: "1.5px solid #16A34A",
    background: "#F0FDF4",
  },
  roleEmoji: {
    fontSize: "24px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "center",
  },
  roleTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  roleDescription: {
    fontSize: "12px",
    color: "#6B7280",
    lineHeight: 1.4,
    margin: 0,
  },
  loginButton: {
    width: "100%",
    marginTop: "24px",
    padding: "13px",
    background: "#16A34A",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  bottomText: {
    textAlign: "center",
    fontSize: "13px",
    color: "#6B7280",
    marginTop: "18px",
  },
  register: {
    color: "#16A34A",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Login;