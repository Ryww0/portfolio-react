import React from "react";

function Project({ name, date }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{date}</h3>
    </>
  );
}

export default Project;
