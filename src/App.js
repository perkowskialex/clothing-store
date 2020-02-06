import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />{" "}
        <Route component={ShopPage} exact path="/shop" />{" "}
        <Route component={SignInPage} exact path="/signin" />{" "}
      </Switch>
    </div>
  );
}

export default App;
