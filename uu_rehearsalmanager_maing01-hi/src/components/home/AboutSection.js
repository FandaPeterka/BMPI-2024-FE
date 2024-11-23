import React from "react";
import { motion } from "framer-motion";
import { Lsi } from "uu5g05";
import lsiHome from "../../lsi/lsi-home";

const AboutSection = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="section-header"><Lsi lsi={lsiHome.about.header} /></h2>
      <p className="about-text">
        <Lsi lsi={lsiHome.about.content} />
      </p>
    </motion.div>
  );
};

export default AboutSection;