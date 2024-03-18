import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterSlice";

configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
