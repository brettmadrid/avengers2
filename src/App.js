import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

import "./App.css";

import heros from "./data";

function App() {
  const [hero] = useState(heros);
  return (
    <div className="App">
      <Navigation />
      <header className="app-container">
        <Switch>
          <Route path="/avengers/:hero">
            <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route path="/avengers/">
            <AvengersList hero={hero} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
