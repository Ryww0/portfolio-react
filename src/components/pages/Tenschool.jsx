import React from "react";
import Title from "../molecules/WorkPage/Title";
import Link from "../molecules/WorkPage/Link";
import Creators from "../molecules/WorkPage/Creators";
import Image from "../molecules/WorkPage/Image";
import Presentation from "../molecules/WorkPage/Presentation";

function Tenschool() {
  const creators = ["Laurent CHAITAS"];
  const mainPresentation =
    "Développement front et back - plateforme de cours en ligne.";
  const contentPresentation =
    "Tenschool est le projet que j'ai présenté pour valider mon titre professionnel. L'objectif était de créér un plateforme dans laquelle des formateurs peuvent créer des cours consultables par les étudiants. Dans le cadre de mon apprentissage, j'ai décidé d'intégrer React dans ce projet Symfony. Cela m'a permi d'accroitre grandement mes compétences.";
  const languages = ["Symfony", "React"];

  return (
    <div className="workpage">
      <div className="container">
        <Title name="ten school" date="2023" />
        <div>
          <Creators creators={creators} />
        </div>
        <Image name="tenschool" />
        <Presentation
          mainPresentation={mainPresentation}
          contentPresentation={contentPresentation}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default Tenschool;
