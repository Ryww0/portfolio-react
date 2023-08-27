import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/organisms/Header";
import Home from "./components/pages/Home";

function App() {
  const [aboutIsActive, setAboutIsActive] = useState(false);

  let toggleAbout = () => {
    setAboutIsActive((current) => !current);
    console.log(aboutIsActive);
  };

  return (
    <div className="container">
      <Router>
        <Header toggleAbout={toggleAbout} aboutIsActive={aboutIsActive} />
        <Routes>
          <Route path="/" element={<Home aboutIsActive={aboutIsActive} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
