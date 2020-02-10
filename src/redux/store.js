import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//spread in all values from logger array, can add it to array value if needed
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
