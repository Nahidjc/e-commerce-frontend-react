import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "./Login";
import { signUpReducer } from "./SignUp";
const persistConfig = {
  key: "authentication",
  storage,
};

// const middlewares = [];
// if (process.env.NODE_ENV !== "development") {
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  signUp: signUpReducer,
  userDetails: persistedReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: true
});
export const persistor = persistStore(store);