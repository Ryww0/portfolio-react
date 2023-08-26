import React from "react";

function Project({ name, date }) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <h3>{date}</h3>
    </div>
  );
}

export default Project;
