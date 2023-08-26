import React from "react";
import Project from "../molecules/Project";

function Work() {
  return (
    <div className="containerWork">
      <div className="work">
        <Project name={"ten school"} date={"2023"} />
        <Project name={"pokedex"} date={"2022"} />
        <Project name={"ace bakery"} date={"2022"} />
      </div>
    </div>
  );
}

export default Work;
