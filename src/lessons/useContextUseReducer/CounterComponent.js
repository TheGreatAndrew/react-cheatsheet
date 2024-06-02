import React from 'react';
import { useCounter } from './CounterContext';

const CounterComponent = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
