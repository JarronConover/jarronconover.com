import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <h1 style={styles.title}>Welcome Jarron</h1>
          
          <div style={styles.socialGrid}>
            {[
              { 
                text: "Instagram", 
                url: "https://www.instagram.com/jarron.conover/",
                borderGradient: "linear-gradient(135deg, #E4405F, #F56040, #FCAF45)",
                hoverGradient: "linear-gradient(135deg, #E4405F, #F56040, #FCAF45)",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                text: "LinkedIn", 
                url: "https://www.linkedin.com/in/jarron-conover-8719a4343/",
                borderGradient: "linear-gradient(135deg, #0077B5, #00A0DC)",
                hoverGradient: "linear-gradient(135deg, #0077B5, #00A0DC)",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                text: "Facebook", 
                url: "https://www.facebook.com/jarron.conover",
                borderGradient: "linear-gradient(135deg, #1877F2, #42A5F5)",
                hoverGradient: "linear-gradient(135deg, #1877F2, #42A5F5)",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                text: "Letterboxd", 
                url: "https://letterboxd.com/jarronconover/",
                borderGradient: "linear-gradient(135deg, #00D735, #00E676)",
                hoverGradient: "linear-gradient(135deg, #00D735, #00E676)",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3zM3 18V8h18v10H3z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                text: "Email", 
                url: "mailto:jarron@altobm.com",
                borderGradient: "linear-gradient(135deg, #EA4335, #F87171)",
                hoverGradient: "linear-gradient(135deg, #EA4335, #F87171)",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{
                  ...styles.socialCardWrapper,
                  background: item.borderGradient,
                }}
                whileHover={{ scale: 1.06 }}
              >
                <motion.a
                  href={item.url}
                  target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  style={styles.socialCard}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* SLIDING GRADIENT LAYER */}
                  <motion.div
                    variants={{
                      rest: { x: "-120%" },
                      hover: { x: "0%" },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "10px",
                      zIndex: 0,
                      background: item.hoverGradient,
                    }}
                  />
            
                  {/* CONTENT */}
                  <motion.div
                    style={styles.socialCardContent}
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.02 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span style={styles.socialIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                </motion.a>
              </motion.div>
            ))}
          </div>
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
            Professional
          </motion.h2>

          <div style={styles.grid}>
            {[
              { text: "Alto AI Marketing Assistant", url: "https://altobm.com" },
              { text: "Aspire Reliability Application", url: "https://reliability.aspire-computing.com/login" },
              { text: "Published Research Paper", url: "https://ieeexplore.ieee.org/abstract/document/10955822" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target={item.url !== "#" ? "_blank" : undefined}
                rel={item.url !== "#" ? "noopener noreferrer" : undefined}
                variants={cardVariant}
                style={styles.card}
                whileHover={{ scale: 1.02 }}
              >
                {item.text}
              </motion.a>
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
            Personal
          </motion.h2>

          <div style={styles.grid}>
            {["Locked"].map((item, i) => {
              const isLocked = item === "Locked";
              
              if (isLocked) {
                return (
                  <motion.div
                    key={i}
                    variants={cardVariant}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      to="/locked"
                      style={{
                        ...styles.entCard,
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              }
              
              return (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  whileHover={{ scale: 1.05 }}
                  style={styles.entCard}
                >
                  {item}
                </motion.div>
              );
            })}
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
    textAlign: "center" as const,
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
    textDecoration: "none",
    color: "inherit",
    display: "block",
    cursor: "pointer",
    textAlign: "left" as const,
  },
  entCard: {
    background: "#111827",
    padding: "2.5rem",
    borderRadius: "20px",
    fontSize: "1.25rem",
    textAlign: "center" as const,
    cursor: "pointer",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  socialGrid: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "1rem",
    justifyContent: "center",
    marginTop: "2rem",
  },
  socialCardWrapper: {
    padding: "2px",
    borderRadius: "12px",
    cursor: "pointer",
  },
  socialCard: {
    background: "white",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    fontSize: "1rem",
    textDecoration: "none",
    color: "#1a1a1a",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
  },
  socialCardContent: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    position: "relative" as const,
    zIndex: 1,
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
