import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { increment, incrementByAmount, decrement, multiply, divide, reset } from "./counterSlice"

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(divide())}>÷</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(multiply())}>x</button>
          <button onClick={() => dispatch(reset())}>0</button>
        </div>
        <input type='text' value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />

        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>reset</button>
        </div>
      </section>
    </div>
  )
}

export default Counter
