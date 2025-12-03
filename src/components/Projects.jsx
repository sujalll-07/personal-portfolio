import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects(In Future)
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
            <img
              src="/projects/ai-saas.jpg"
              alt="AI SaaS Platform preview"
              loading="lazy"
              width="800"
              height="600"
            />
          </motion.div>
          <h3> AI SaaS Platform</h3>
          <p className="dark">
            A modern SaaS platform built with Next.js and OpenAI integration,
            featuring real-time AI-powered content generation and analytics.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <img
              src="/projects/social-media.jpg"
              alt="Social media dashboard preview"
              loading="lazy"
              width="800"
              height="600"
            />
          </motion.div>
          <h3>Social Media Dashboard</h3>
          <p>
            A comprehensive social media management dashboard with analytics,
            scheduling, and engagement tracking features.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div className="project-image" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <img
              src="/projects/stopwatch.jpg"
              alt="Productivity timer app preview"
              loading="lazy"
              width="800"
              height="600"
            />
          </motion.div>
          <h3>Productivity Timer</h3>
          <p>
            A sleek productivity timer application with customizable work
            sessions, statistics tracking, and dark mode support.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
