import React from "react";
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      className="aboutArticle"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
    >
      <h4>
        "C'est de la force des convictions que dépend la réussite, pas du nombre
        des partisans."
      </h4>
      <p>
        Je suis actuellement en recherche d'emploi en tant que développeur web.
      </p>
      <p>
        Jeune développeur web de 23 ans, je maitrîse Symfony, React et MySQL,
        sans oublier l'incoutournable et indispensable GIT.
      </p>
    </motion.div>
  );
}

export default AboutContent;
