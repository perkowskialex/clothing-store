import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomePage} exact path="/" />{" "}
      </Switch>
    </div>
  );
}

export default App;
