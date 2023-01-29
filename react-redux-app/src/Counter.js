import React, { useState } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./app/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);

  const addValue = Number(incrementValue) || 0;

  const ResetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-5 mt-5">
        <p className="fw-bold h1">{count}</p>
        <div className="mt-3">
          <button
            className="btn btn-primary btn-lg me-4"
            onClick={() => dispatch(increment(count))}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => dispatch(decrement(count))}
          >
            -
          </button>
        </div>

        <div>
          <input
          className="mt-3 mb-3"
            type="text"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
          />
          <br/>
          <button
            className="btn btn-primary btn-lg me-3"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add amount
          </button>
          <button className="btn btn-danger btn-lg" onClick={ResetAll}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
