import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //open subscription, calls user on state change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // close subscription
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
