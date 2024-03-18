import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Store/Reducers/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
