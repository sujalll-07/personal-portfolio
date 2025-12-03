import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const LoadingExperience = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds total
    const step = 20; // ms
    const increment = (step / totalDuration) * 100;

    const id = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(id);
          onFinished();
          return 100;
        }
        return next;
      });
    }, step);

    return () => clearInterval(id);
  }, [onFinished]);

  const displayProgress = Math.round(progress);

  return (
    <motion.div
      className="loader-screen"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="loader-card">
        <h1 className="loader-title">Loading your experience</h1>
        <p className="loader-subtitle">
          Sit tight while we prepare your portfolio journey.
        </p>

        <div className="loader-bar-shell">
          <div
            className="loader-bar-fill"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
        <div className="loader-percentage">{displayProgress}%</div>
      </div>
    </motion.div>
  );
};
