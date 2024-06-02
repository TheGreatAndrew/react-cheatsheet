import React, { useState, useEffect, useMemo, useRef } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  // useMemo to calculate the sum of numbers efficiently
  const sum = useMemo(() => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  // useEffect for focusing input on component mount
  useEffect(() => {
    inputRef.current.focus();

    // Cleanup function to clear numbers on component unmount
    return () => {
      setNumbers([]);
    };
  }, []);

  // Function to add input to numbers array
  const handleAddNumber = () => {
    const num = parseFloat(input);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setInput('');
    }
  };

  // Function to clear all numbers using useRef
  const handleClear = () => {
    setNumbers([]);
    setInput('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        type="number"
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add Number</button>
      <button onClick={handleClear}>Clear</button>
      <h2>Sum: {sum}</h2>
      <div>
        Numbers: {numbers.join(", ")}
      </div>
    </div>
  );
}

export default SumCalculator;
