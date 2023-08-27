import React from "react";
import Project from "../molecules/Project";

function Work() {
  return (
    <div className="containerWork">
      <div className="work">
        <Project name={"ten school"} date={"2023"} delay={0} />
        <Project name={"notaresto"} date={"2022"} delay={1} />
        <Project name={"pokedex"} date={"2022"} delay={2} />
        <Project name={"ace bakery"} date={"2022"} delay={3} />
      </div>
    </div>
  );
}

export default Work;
