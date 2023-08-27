import React from "react";
import { motion } from "framer-motion";

function Degree() {
  return (
    <motion.div
      className="aboutArticle"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
    >
      <h4 className="diplome">diplômes</h4>
      <span>2023</span>
      <p>Titre professionnel de développeur web et web mobile</p>
      <span>2017</span>
      <p>Baccalauréat STI2D</p>
    </motion.div>
  );
}

export default Degree;
