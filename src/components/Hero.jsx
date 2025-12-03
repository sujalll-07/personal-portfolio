import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  const phrases = [
    "Sujal Shetty",
    "Web Developer",
    "Chessaholic♟️",
    "Designer",
  ];

  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingSpeed = isDeleting ? 80 : 130;
    const pauseAtEnd = 1200; // pause before deleting

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        const nextText = currentPhrase.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === currentPhrase) {
          // full word typed -> pause then start deleting (except for last?)
          setTimeout(() => setIsDeleting(true), pauseAtEnd);
        }
      } else {
        // deleting
        const nextText = currentPhrase.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch typewriter"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <span className="typewriter-text">{typedText}</span>
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Learning Developer & Creative Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I craft beautiful digital experiences that combine stunning design
            with powerful functionality. Specializing in modern web applications
            and interactive user interfaces.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/sujal-2515" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://www.instagram.com/_s.u.j.a.l.__/" target="_blank">
              <i className="fab fa-instagram"> </i>
            </motion.a>
            <motion.a
              href="https://www.chess.com/member/suzzall"
              target="_blank"
              className="chess-link"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chess-pawn"> </i>
              <span className="social-tooltip">Challenge Me In Chess</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Sujal_Shetty",
  college: "Fr. Conceicao Rodrigues College of Engineering",
  role: "Learning Full Stack Development",
  stack: {
    languages: ["JavaScript", "C", "C++"],
    framework:["TailwindCSS","Bootstrap"],
  },
  hobbies: [
    "Discovering unique coffee spots",
    "Late-night coding experiments",
    "Curating aesthetic playlists",
    "Chess Player"
],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently learning on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
