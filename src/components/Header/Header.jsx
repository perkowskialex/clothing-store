import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropDown />
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);
