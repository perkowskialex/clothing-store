import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

// clean out cart method
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// listener
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
