import React, { useState } from 'react';

const BasicState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Update the count state by incrementing it by 1
  };

  const decrement = () => {
    setCount(count - 1); // Update the count state by decrementing it by 1
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default BasicState;