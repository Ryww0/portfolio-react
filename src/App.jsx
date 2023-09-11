import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/organisms/Header";
import Home from "./components/pages/Home";
import Acebakery from "./components/pages/Acebakery";
import Pokedex from "./components/pages/Pokedex";
import Hangman from "./components/pages/Hangman";
import Tenschool from "./components/pages/Tenschool";
import Loba from "./components/pages/Loba";

function App() {
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [workpageIsOn, setWorkpageIsOn] = useState(false);

  let toggleAbout = () => {
    setAboutIsActive((current) => !current);
  };

  let setOnWorkpage = () => {
    setWorkpageIsOn(true);
  };

  let unsetOnWorkpage = () => {
    setWorkpageIsOn(false);
  };

  return (
    <div className="container-fluid">
      <Router>
        <Header
          toggleAbout={toggleAbout}
          aboutIsActive={aboutIsActive}
          workpageIsOn={workpageIsOn}
          unsetOnWorkpage={unsetOnWorkpage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                aboutIsActive={aboutIsActive}
                setOnWorkpage={setOnWorkpage}
              />
            }
          />
          <Route path="/ace-bakery" element={<Acebakery />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/tenschool" element={<Tenschool />} />
          <Route path="/loba" element={<Loba />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
