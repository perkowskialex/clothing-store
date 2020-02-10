import cartActionTypes from "./cart-types";

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // use toggle because itll be either hidden or not hidden
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
