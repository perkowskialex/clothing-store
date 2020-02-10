import userActionTypes from "./user-types";

//create user actions

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
