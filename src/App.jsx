import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { LoadingExperience } from "./components/LoadingExperience";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [phase, setPhase] = useState("loading"); // "loading" | "app"

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (phase === "loading") {
    return (
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        <LoadingExperience onFinished={() => setPhase("app")} />
      </div>
    );
  }

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 Sujal Shetty. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
