import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import Checkout from "./pages/Checkout/Checkout";

import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { connect } from "react-redux";

import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    // want it to fire only the first time (cdm)
    checkUserSession();
    //pass check user session into array, property function from mapDispatchToProps
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />{" "}
        <Route component={ShopPage} path="/shop" />{" "}
        <Route component={Checkout} exact path="/checkout" />{" "}
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />{" "}
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
