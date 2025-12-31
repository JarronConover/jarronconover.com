import { motion } from "framer-motion";

export default function Personal() {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.content}
      >
        <h1 style={styles.title}>Personal</h1>
        <p style={styles.subtitle}>Welcome to your personal space</p>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "white",
    fontFamily: "sans-serif",
  },
  content: {
    textAlign: "center" as const,
    padding: "2rem",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "1.25rem",
    opacity: 0.85,
  },
};

