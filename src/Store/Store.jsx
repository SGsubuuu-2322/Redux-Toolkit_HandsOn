import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
