import React from "react";

function Presentation({ mainPresentation, contentPresentation, languages }) {
  return (
    <div className="row workpage-presentation mt-5">
      <div className="col-12 col-sm-5 item">{mainPresentation}</div>
      <div className="col-12 col-sm-5 item">{contentPresentation}</div>
      <div className="col-12 col-sm-2 item">
        <h4>Langages</h4>
        <ul>
          {languages.map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Presentation;
