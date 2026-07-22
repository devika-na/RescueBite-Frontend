import { useState } from "react";
import {
  FaLeaf,
  FaEnvelope,
  FaUser,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

function Register({ setPage, setUser }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: ""
  });

  const [role, setRole] = useState("donor");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Please fill in your name, email, and password.");
      return;
    }

    // TODO: replace with a real POST to your FastAPI /register endpoint
    setUser({
      email: form.email.trim(),
      role: role
    });

    setPage("login");
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT SIDE */}

        <div style={styles.leftSection}>

          <div style={styles.heroIcon}>🌱</div>

          <h1 style={styles.heroTitle}>Join RescueBite AI</h1>

          <p style={styles.heroText}>
            Create an account to start donating surplus food or
            receiving matched donations as an NGO partner.
          </p>

          <div style={styles.heroCards}>
            <div style={styles.smallCard}>🍱 Food Donation</div>
            <div style={styles.smallCard}>🤝 NGO Matching</div>
            <div style={styles.smallCard}>🚚 Smart Delivery</div>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div style={styles.rightSection}>

          <div style={styles.formCard}>

            <div style={styles.logoContainer}>
              <FaLeaf size={32} color="#16A34A" />
            </div>

            <h2 style={styles.formTitle}>Create Account</h2>
            <p style={styles.formSubtitle}>
              Sign up to get started with RescueBite AI
            </p>

            <form onSubmit={handleSubmit}>

              <label style={styles.label} htmlFor="name">Full Name</label>
              <div style={styles.inputContainer}>
                <FaUser size={16} color="#cccccc" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <label style={styles.label} htmlFor="email">Email Address</label>
              <div style={styles.inputContainer}>
                <FaEnvelope size={16} color="#cccccc" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <label style={styles.label} htmlFor="password">Password</label>
              <div style={styles.inputContainer}>
                <FaLock size={16} color="#cccccc" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.row}>

                <div style={styles.halfField}>
                  <label style={styles.label} htmlFor="phone">Phone</label>
                  <div style={styles.inputContainer}>
                    <FaPhone size={14} color="#cccccc" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91..."
                      value={form.phone}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.halfField}>
                  <label style={styles.label} htmlFor="location">Location</label>
                  <div style={styles.inputContainer}>
                    <FaMapMarkerAlt size={14} color="#cccccc" />
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City"
                      value={form.location}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>

              </div>

              <label style={styles.label}>Select Your Role</label>

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
                  <div style={styles.roleEmoji}>🍱</div>
                  <h3 style={styles.roleTitle}>Food Donor</h3>
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
                    <MdVolunteerActivism size={28} color="#16A34A" />
                  </div>
                  <h3 style={styles.roleTitle}>NGO Receiver</h3>
                </button>

              </div>

              <button type="submit" style={styles.submitButton}>
                Create Account
                <FaArrowRight style={{ marginLeft: "10px" }} />
              </button>

              <p style={styles.bottomText}>
                <span
                  style={styles.backLink}
                  onClick={() => setPage("login")}
                >
                  <FaArrowLeft size={12} style={{ marginRight: "6px" }} />
                  Back to Login
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
    minHeight: "640px",
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
  heroIcon: { fontSize: "48px", marginBottom: "16px" },
  heroTitle: { fontSize: "32px", fontWeight: 700, margin: "0 0 16px 0" },
  heroText: { fontSize: "15px", lineHeight: 1.6, color: "#DCFCE7", margin: "0 0 32px 0" },
  heroCards: { display: "flex", flexDirection: "column", gap: "12px" },
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
  formCard: { width: "100%", maxWidth: "400px" },
  logoContainer: { display: "flex", justifyContent: "center", marginBottom: "12px" },
  formTitle: { fontSize: "24px", fontWeight: 700, color: "#111827", textAlign: "center", margin: "0 0 4px 0" },
  formSubtitle: { fontSize: "14px", color: "#6B7280", textAlign: "center", margin: "0 0 24px 0" },
  label: { display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px", marginTop: "14px" },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1.5px solid #D1D5DB",
    borderRadius: "10px",
    padding: "9px 14px",
  },
  input: { flex: 1, border: "none", outline: "none", fontSize: "14px", color: "#111827" },
  row: { display: "flex", gap: "12px" },
  halfField: { flex: 1 },
  roleGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "8px" },
  roleCard: {
    border: "1.5px solid #E5E7EB",
    borderRadius: "12px",
    padding: "14px 10px",
    textAlign: "center",
    cursor: "pointer",
    background: "#FFFFFF",
    fontFamily: "inherit",
    transition: "border-color 0.15s ease, background 0.15s ease",
  },
  selectedRole: { border: "1.5px solid #16A34A", background: "#F0FDF4" },
  roleEmoji: { fontSize: "22px", marginBottom: "6px", display: "flex", justifyContent: "center" },
  roleTitle: { fontSize: "13px", fontWeight: 600, color: "#111827", margin: 0 },
  submitButton: {
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
  bottomText: { textAlign: "center", fontSize: "13px", color: "#6B7280", marginTop: "18px" },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#16A34A",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Register;