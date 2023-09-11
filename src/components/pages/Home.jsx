import React from "react";

import Work from "../organisms/Work";
import About from "./About";

function Home({ aboutIsActive, setOnWorkpage }) {
  return (
    <>
      <Work setOnWorkpage={setOnWorkpage} />
      {aboutIsActive && (
        <>
          <About />
        </>
      )}
    </>
  );
}

export default Home;
