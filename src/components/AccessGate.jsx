import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const AccessGate = ({ onSuccess }) => {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null); // "correct" | "wrong" | null

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = answer.trim();
    const numeric = Number(normalized);

    const isCorrect = normalized === "7" || numeric === 7;

    if (isCorrect) {
      setStatus("correct");
      // hold the page for ~1s so the user sees the success message
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } else {
      setStatus("wrong");
    }
  };

  return (
    <motion.div
      className="gate-screen"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="gate-card" variants={card}>
        <h1 className="gate-title">Access Challenge</h1>
        <p className="gate-subtitle">
          "I am an odd number. Take one letter away and I become even. What number
          am I?"
        </p>

        <form className="gate-form" onSubmit={handleSubmit}>
          <label className="gate-label" htmlFor="gate-answer">
            Enter your answer as a number:
          </label>
          <input
            id="gate-answer"
            type="number"
            className="gate-input"
            placeholder="Your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            autoFocus
          />
          {status === "wrong" && (
            <div className="gate-status gate-status-wrong">
              Wrong answer access denied
            </div>
          )}
          {status === "correct" && (
            <div className="gate-status gate-status-correct">
              Correct answer access granted
            </div>
          )}
          <button type="submit" className="gate-button">
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
