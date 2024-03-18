// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Reducers/CounterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container bg-red-200 m-auto p-10 mt-5">
      <h1 className="mb-5 text-4xl text-red-900 text-center font-bold">
        Counter: {value}
      </h1>

      <div className="buttons text-center">
        <button
          onClick={() => dispatch(increment())}
          className="border border-2 border-red-900 rounded-lg px-5 py-2 bg-transparent hover:bg-red-900 hover:text-red-200 mr-5"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="border border-2 border-red-900 rounded-lg px-5 py-2 bg-transparent hover:bg-red-900 hover:text-red-200 mr-5"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border border-2 border-red-900 rounded-lg px-5 py-2 bg-transparent hover:bg-red-900 hover:text-red-200 mr-5"
        >
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default App;
