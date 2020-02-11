import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { selectCartItems } from "../../redux/cart/cart-selector";
import "./CartDropDown.scss";
import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
