import React from "react";
import Title from "../molecules/WorkPage/Title";
import Link from "../molecules/WorkPage/Link";
import Creators from "../molecules/WorkPage/Creators";
import Image from "../molecules/WorkPage/Image";
import Presentation from "../molecules/WorkPage/Presentation";

function Loba() {
  const creators = ["Laurent CHAITAS", "Devy LEBLOND", "Julien ASINARI"];
  const mainPresentation =
    "Conception et développement d'un site web pour un ONG.";
  const contentPresentation =
    "Lors de la période de stage nous avons eu l'occasion de mettre à jour le site web d'une ONG. La demande était de créer un site web permettant aux membres de l'ONG de modifier le contenu grâce à un espace administrateur. J'ai été en charge de la conception de l'application et de la création de la base de donnée ainsi que la création d'un système de traduction. Cette traduction devait aussi être possible sur les données.";
  const languages = ["Symfony", "Twig", "css", "js"];

  return (
    <div className="workpage">
      <div className="container">
        <Title name="loba" date="2023" />
        <div>
          <Link link="www.lobainternational.org" />
          <Creators creators={creators} />
        </div>
        <Image name="loba" />
        <Presentation
          mainPresentation={mainPresentation}
          contentPresentation={contentPresentation}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default Loba;
