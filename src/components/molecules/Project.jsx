import React from "react";
import { motion } from "framer-motion";

function Project({ name, date, delay }) {
  return (
    <motion.div
      className="project"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 * delay + 0.5 }}
    >
      <h2>{name}</h2>
      <h3>{date}</h3>
    </motion.div>
  );
}

export default Project;
