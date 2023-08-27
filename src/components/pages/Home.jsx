import React from "react";

import Work from "../organisms/Work";
import About from "./About";

function Home({ aboutIsActive }) {
  return (
    <>
      <Work />
      {aboutIsActive && (
        <>
          <About />
        </>
      )}
    </>
  );
}

export default Home;
