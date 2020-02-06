import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomePage} exact path="/" />{" "}
        <Route component={ShopPage} exact path="/shop" />{" "}
      </Switch>
    </div>
  );
}

export default App;
