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
              I’m a developer who cares about one thing: building things that
              actually work. I don’t hide behind buzzwords or templates — I
              learn fast, ship fast, and fix what needs fixing. My focus is
              clean logic, reliable execution, and making products that feel
              intentional, not accidental.
            </p>
            <p className="about-paragraph">
              I work across frontend and backend, and I pick tools based on what
              solves the problem, not what’s trendy. Whether it’s designing a
              smooth interface, structuring an API, or debugging something that
              shouldn’t even be broken, I approach everything with the same
              mindset: understand the system, break it down, and deliver
              something better than what I started with.
            </p>
            <p className="about-paragraph">
              Right now, I’m sharpening my engineering depth and building
              projects that show real thinking, not just pretty UI. If you want
              someone who takes ownership, learns aggressively, and doesn’t need
              hand-holding to get things done — that’s me.
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
