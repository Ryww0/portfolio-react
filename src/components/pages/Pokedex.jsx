import React from "react";
import Title from "../molecules/WorkPage/Title";
import Link from "../molecules/WorkPage/Link";
import Creators from "../molecules/WorkPage/Creators";
import Image from "../molecules/WorkPage/Image";
import Presentation from "../molecules/WorkPage/Presentation";

function Pokedex() {
  const creators = ["Laurent CHAITAS"];
  const mainPresentation = "Développement front et intégration d'un API";
  const contentPresentation =
    "Dans le cadre de la formation DWWM, l'objectif était d'apprendre à intégrer une API et récuperer les informations nécéssaires au format JSON. J'ai choisi de recréer le pokédex de Pokémon en utilisant l'API pokebuildapi.";
  const languages = ["html", "css", "js"];

  return (
    <div className="workpage">
      <div className="container">
        <Title name="pokedex" date="2022" />
        <div>
          <Link link="ryww0.github.io/Pokedex/" />
          <Creators creators={creators} />
        </div>
        <Image name="pokedex" />
        <Presentation
          mainPresentation={mainPresentation}
          contentPresentation={contentPresentation}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default Pokedex;
