import React from "react";

function Link({ link }) {
  return (
    <a rel="noopener noreferrer" href={`https://${link}`} target="_blank">
      {link}
    </a>
  );
}

export default Link;
