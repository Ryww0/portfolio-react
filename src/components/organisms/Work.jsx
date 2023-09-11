import React from "react";
import Project from "../molecules/Project";
import { Link } from "react-router-dom";

function Work({ setOnWorkpage }) {
  return (
    <div className="containerWork">
      <div className="work">
        <Link onClick={() => setOnWorkpage()} to="/loba">
          <Project name={"loba"} date={"2023"} delay={0} />
        </Link>
        <Link onClick={() => setOnWorkpage()} to="/tenschool">
          <Project name={"ten school"} date={"2023"} delay={1} />
        </Link>
        <Link onClick={() => setOnWorkpage()} to="/hangman">
          <Project name={"hangman game"} date={"2023"} delay={2} />
        </Link>
        <Link onClick={() => setOnWorkpage()} to="/pokedex">
          <Project name={"pokedex"} date={"2022"} delay={3} />
        </Link>
        <Link onClick={() => setOnWorkpage()} to="/ace-bakery">
          <Project name={"ace bakery"} date={"2022"} delay={4} />
        </Link>
      </div>
    </div>
  );
}

export default Work;
