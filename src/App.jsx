import React, { useState } from "react";
import NewsBoard from "./components/NewsBoard";
import "./App.css"

const App = () => {
  const [category, setcategory] = useState("general");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <li
          className="navbar-brand"
          style={{ gap: "19px", fontWeight: "bolder", cursor: "pointer" }}
        >
          NEWS 18
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </li>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-nav"
            style={{ gap: "12x", cursor: "pointer" }}
          >
            <li className="btn2" onClick={() => setcategory("technology")} >Technology</li>
            <li className="btn2" onClick={() => setcategory("sports")}>Sports</li>
            <li className="btn2" onClick={() => setcategory("health")}>Health</li>
            <li className="btn2" onClick={() => setcategory("business")}>Business</li>
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: "black" }}>
        <NewsBoard category={category} setcategory={setcategory} />
      </div>
    </>
  );
};

export default App;
