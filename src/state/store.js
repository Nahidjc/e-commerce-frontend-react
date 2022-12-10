import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../features/counter/counterSlice";
import { loginReducer } from "./Login";
import { signUpReducer } from "./SignUp";

const persistConfig = {
  key: "token",
  storage,
};

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig);
const rootReducer = combineReducers({
  counter: counterReducer,
  signUp: signUpReducer,
  userDetails: loginReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
});
export const persistor = persistStore(store);