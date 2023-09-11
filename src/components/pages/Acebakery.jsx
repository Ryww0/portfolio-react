import React from "react";
import Title from "../molecules/WorkPage/Title";
import Link from "../molecules/WorkPage/Link";
import Creators from "../molecules/WorkPage/Creators";
import Image from "../molecules/WorkPage/Image";
import Presentation from "../molecules/WorkPage/Presentation";

function Acebakery() {
  const creators = ["Laurent CHAITAS", "Martial TREVOT", "Frédéric PLAN"];
  const mainPresentation =
    "Web design et développement web dans le cadre de la formation DWWM - site vitrine pour une boulangerie fictive";
  const contentPresentation =
    "L'objectif de ce site était de créer un site web pour un artisant local fictif. Avec deux autres développeurs nous avons donc décidé de créer ce site vitrine pour une boulangerie. J'ai effectué le maquettage de site et j'ai participé au développement front de certaines parties version desktop et mobile.";
  const languages = ["html", "css", "js"];

  return (
    <div className="workpage">
      <div className="container">
        <Title name="ace bakery" date="2022" />
        <div>
          <Link link="ryww0.github.io/Ace_Bakery/" />
          <Creators creators={creators} />
        </div>
        <Image name="acebakery" />
        <Presentation
          mainPresentation={mainPresentation}
          contentPresentation={contentPresentation}
          languages={languages}
        />
      </div>
    </div>
  );
}

export default Acebakery;
