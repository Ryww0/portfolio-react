import React from "react";

function Creators({ creators }) {
  return (
    <ul>
      {creators.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}

export default Creators;
