import { useState } from "react";
import Header from "./components/organisms/Header";
import Work from "./components/organisms/Work";
import About from "./components/pages/About";

function App() {
  const [aboutIsActive, setAboutIsActive] = useState(false);

  let toggleAbout = () => {
    setAboutIsActive((current) => !current);
    console.log(aboutIsActive);
  };

  return (
    <div className="container">
      <Header toggleAbout={toggleAbout} aboutIsActive={aboutIsActive} />
      <Work />
      {aboutIsActive && (
        <>
          <About />
        </>
      )}
    </div>
  );
}

export default App;
