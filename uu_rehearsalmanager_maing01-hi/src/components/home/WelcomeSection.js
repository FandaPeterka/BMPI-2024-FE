import React from "react";
import { motion } from "framer-motion";
import { Lsi } from "uu5g05";
import lsiHome from "../../lsi/lsi-home";

const WelcomeSection = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-header"><Lsi lsi={lsiHome.welcomeMessage.header} /></h2>
      <p className="section-content">
        <Lsi lsi={lsiHome.welcomeMessage.content} />
      </p>
    </motion.div>
  );
};

export default WelcomeSection;