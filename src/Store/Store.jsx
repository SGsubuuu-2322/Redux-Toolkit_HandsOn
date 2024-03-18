import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Reducers/CounterSlice";

configureStore({
  reducer: {
    counterReducer: CounterSlice,
  },
});
