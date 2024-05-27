import React from 'react';

const PureFunction = ({ name }) => {
  const generateGreeting = (name) => {
    return `Hello, ${name}!`;
  };

    // Bad: changing a preexisting variable!
    let guest = 0;
    function impureFunction() {
        guest = guest + 1;
        return <h2>Tea cup for guest #{guest}</h2>;
    }

  return (
    <div>
      <h1>{generateGreeting(name)}</h1>
      <h1>{impureFunction()}</h1>
      <h1>{impureFunction()}</h1>

    </div>
  );
};

export default PureFunction;
