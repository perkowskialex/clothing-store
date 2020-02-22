import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//spread in all values from logger array, can add it to array value if needed
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { store, persistor };
