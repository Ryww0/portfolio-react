import React from "react";
import Title from "../molecules/WorkPage/Title";
import Link from "../molecules/WorkPage/Link";
import Creators from "../molecules/WorkPage/Creators";
import Image from "../molecules/WorkPage/Image";
import Presentation from "../molecules/WorkPage/Presentation";

function Hangman() {
  const creators = ["Laurent CHAITAS"];
  const mainPresentation = "Développement JS - jeu du pendu from scratch";
  const contentPresentation =
    "J'ai décidé de réaliser ce jeu en parrallèle de ma formation lors de mon temps libre pour améliorer ma compréhension et mes compétences en JS. L'objectif était de réaliser le jeu du pendu en partant de 0, sans tutoriel uniquement avec mes connaissances.";
  const languages = ["html", "css", "js"];

  return (
    <div className="workpage">
      <div className="container">
        <Title name="hangman game" date="2023" />
        <div>
          <Link link="ryww0.github.io/le-jeu-du-pendu/" />
          <Creators creators={creators} />
        </div>
        <Image name="hangman" />
        <Presentation
          mainPresentation={mainPresentation}
          contentPresentation={contentPresentation}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default Hangman;
