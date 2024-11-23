import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaPenNib, FaUserCheck } from "react-icons/fa";
import { Lsi } from "uu5g05";
import lsiHome from "../../lsi/lsi-home";

const FeaturesSection = () => {
  const featureIcons = {
    FaCalendarAlt: <FaCalendarAlt className="feature-icon" />,
    FaPenNib: <FaPenNib className="feature-icon" />,
    FaUserCheck: <FaUserCheck className="feature-icon" />,
  };

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="section-header"><Lsi lsi={lsiHome.features.header} /></h2>
      <div className="feature-list">
        {lsiHome.features.items.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {featureIcons[feature.icon]}
            <h3><Lsi lsi={feature.title} /></h3>
            <p><Lsi lsi={feature.description} /></p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;