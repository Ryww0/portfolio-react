import React from "react";

function Image({ name }) {
  return (
    <div className="d-flex justify-content-end">
      <img src={`/assets/${name}.png`} alt="" />
    </div>
  );
}

export default Image;
