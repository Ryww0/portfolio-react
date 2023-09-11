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
        Jeune développeur web de 23 ans, j'ai trouvé ma passion dans le
        développement web. Maitrisant PHP et son framework Symfony, JavaScript
        ainsi que React, j'aime apprendre sans cesse de nouvelles choses et
        améliorer mes compétences en m'inspirant de ce que les autres peuvent
        faire.
      </p>
    </motion.div>
  );
}

export default AboutContent;
