import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
  }),
};

export const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-inner"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-header">
          <p className="section-kicker">About Me</p>
          <h2 className="about-title">
            Engineering Student <span>&amp; Developer</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-avatar-shell">
            <div className="about-avatar-ring" />
            <div className="about-avatar-placeholder">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="about-avatar-img"
              />
            </div>
          </div>

          <div className="about-content">
            <p className="about-paragraph">
              As an engineering student and developer, I thrive at the
              convergence of technology, business strategy, and design. I am
              passionate about the entire product lifecycle, seeing concepts
              evolve from underlying logic into intuitive user experiences.
            </p>
            <p className="about-paragraph">
              My focus is on crafting efficient, elegant interfaces and
              leveraging emerging tools to solve complex challenges. Ultimately,
              I am driven by a desire to continuously evolve, deliver quality
              software, and build solutions that provide tangible value.
            </p>

            <div className="about-education">
              <h3>Education</h3>
              <p className="about-edu-degree">Computer Engineering</p>
              <p>Fr. Conceicao Rodrigues College of Engineering</p>
              <p>Graduation: 2029</p>
            </div>
          </div>
        </div>

        <div className="about-cards-row">
          {[
            {
              icon: "</>",
              title: "Web Development",
              desc: "Full‑stack development with modern technologies.",
            },
            {
              icon: "UI",
              title: "UI/UX Design",
              desc: "Creating intuitive and beautiful interfaces.",
            },
            {
              icon: "?",
              title: "Problem Solving",
              desc: "Analytical thinking with practical solutions.",
            },
            {
              icon: "$",
              title: "Stock Market",
              desc: "Exploring markets, price action, and long-term investing.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              className="about-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
