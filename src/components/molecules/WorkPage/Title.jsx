import React from "react";

function Title({ name, date }) {
  return (
    <div className="workpage-title">
      <h2>{name}</h2>
      <h3>{date}</h3>
    </div>
  );
}

export default Title;
