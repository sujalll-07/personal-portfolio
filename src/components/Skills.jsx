import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skills = [
  { name: "HTML", level: 100, logo: "/skills/html.svg" },
  { name: "CSS", level: 100, logo: "/skills/css.svg" },
  { name: "JavaScript", level: 85, logo: "/skills/javascript.svg" },
  { name: "Tailwind CSS", level: 100, logo: "/skills/tailwind.svg" },
  { name: "Next.js", level: 70, logo: "/skills/nextjs.svg" },
  { name: "C", level: 100, logo: "/skills/c.svg" },
  { name: "Python", level: 60, logo: "/skills/python.svg" },
];

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="skills-inner"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="skills-header" variants={fadeInUp}>
          <p className="section-kicker">Skills</p>
          <h2 className="skills-title">Tech Stack</h2>
          <p className="skills-subtitle">
            My core technologies — the stack I use to turn ideas into polished results.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={fadeInUp}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 16px 40px rgba(0, 184, 174, 0.7)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="skill-main">
                <div className="skill-logo-shell">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                  />
                </div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
