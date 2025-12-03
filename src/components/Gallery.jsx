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

const galleryCaptions = {
  1: "Malabar Hill Skywalk",
  2: "Velankanni Beach",
  3: "Café Coffee Day",
  4: "Chinchpokli Cha Chintamani \'25",
  5: "Balaji Temple(Mira-Road)",
  6: "PVR Andheri",
  7: "Chess Tournament",
  8: "Cutie Cat",
  9: "Marine Lines",
};

export const Gallery = () => {
  return (
    <motion.section
      id="gallery"
      className="gallery-section"
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
        Life Beyond Coding
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <motion.div
            key={num}
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
            <motion.div
              className="project-image"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img
                src={`/projects/image${num}.jpg`}
                alt={galleryCaptions[num]}
                loading="lazy"
                width="800"
                height="600"
              />
              <h3
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: 0,
                  padding: "0.65rem 1.25rem",
                  background: "linear-gradient(90deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))",
                  borderRadius: "0 0 16px 16px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#f9fafb",
                  textAlign: "center",
                }}
              >
                {galleryCaptions[num]}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
