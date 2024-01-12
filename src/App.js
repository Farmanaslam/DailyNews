import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [progress, setprogress] = useState(0);
  const [mode, setMode] = useState(`light`);

  // state={
  //   progress:0
  // }
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#242939";
      document.body.style.color = "white";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";

      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* <h1>First Class Component {this.c}</h1> */}
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"general"}
                pageSize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"sports"}
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"business"}
                pageSize={6}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"entertainment"}
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"health"}
                pageSize={6}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"science"}
                pageSize={6}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                apiKey={"fbf9271dc1784cb5b65e522170277b16"}
                key={"technology"}
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
