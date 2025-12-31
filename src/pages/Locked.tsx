import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CORRECT_CODE = "1234";

export default function Locked() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNumberClick = (num: string) => {
    if (code.length < 4) {
      const newCode = code + num;
      setCode(newCode);
      setError("");
      
      if (newCode.length === 4) {
        if (newCode === CORRECT_CODE) {
          setTimeout(() => {
            navigate("/personal");
          }, 300);
        } else {
          setError("Incorrect code");
          setTimeout(() => {
            setCode("");
            setError("");
          }, 1000);
        }
      }
    }
  };

  const handleClear = () => {
    setCode("");
    setError("");
  };

  const handleBackspace = () => {
    setCode(code.slice(0, -1));
    setError("");
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.content}
      >
        <h1 style={styles.title}>Enter Passcode</h1>
        
        <div style={styles.codeDisplay}>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              style={{
                ...styles.codeDot,
                backgroundColor: code.length > index ? "#00D735" : "#333",
              }}
            />
          ))}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={styles.error}
          >
            {error}
          </motion.p>
        )}

        <div style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              style={styles.keypadButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {num}
            </motion.button>
          ))}
          <motion.button
            onClick={handleClear}
            style={styles.keypadButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear
          </motion.button>
          <motion.button
            onClick={() => handleNumberClick("0")}
            style={styles.keypadButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            0
          </motion.button>
          <motion.button
            onClick={handleBackspace}
            style={styles.keypadButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ⌫
          </motion.button>
        </div>
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
    fontSize: "2.5rem",
    marginBottom: "3rem",
    fontWeight: "600",
  },
  codeDisplay: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  codeDot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #555",
    transition: "background-color 0.2s ease",
  },
  error: {
    color: "#EA4335",
    fontSize: "1rem",
    marginBottom: "1rem",
    minHeight: "1.5rem",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    maxWidth: "300px",
    margin: "0 auto",
  },
  keypadButton: {
    padding: "1.5rem",
    fontSize: "1.5rem",
    borderRadius: "12px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
};

