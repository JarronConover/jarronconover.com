import { motion } from "framer-motion";

/* Animation Variants */
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      
      {/* ================= HERO ================= */}
      <section style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.title}>Welcome</h1>
          <p style={styles.subtitle}>
            - Jarron Conover
          </p>
        </motion.div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section style={styles.section}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={sectionVariant} style={styles.sectionTitle}>
            Achievements
          </motion.h2>

          <div style={styles.grid}>
            {[
              "Built AI Marketing Platform",
              "Multiple Production Apps",
              "Open Source Contributor",
            ].map((text, i) => (
              <motion.div key={i} variants={cardVariant} style={styles.card}>
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= ENTERTAINMENT ================= */}
      <section style={styles.darkSection}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={sectionVariant} style={styles.sectionTitle}>
            Entertainment
          </motion.h2>

          <div style={styles.grid}>
            {["Music", "Gaming", "Film", "Sports"].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                style={styles.entCard}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </main>
  );
}

/* ================= STYLES ================= */
const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "white",
  },
  title: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    opacity: 0.85,
  },
  section: {
    minHeight: "100vh",
    padding: "6rem 10%",
    background: "#f8fafc",
  },
  darkSection: {
    minHeight: "100vh",
    padding: "6rem 10%",
    background: "#020617",
    color: "white",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    fontSize: "1.1rem",
  },
  entCard: {
    background: "#111827",
    padding: "2.5rem",
    borderRadius: "20px",
    fontSize: "1.25rem",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
};
