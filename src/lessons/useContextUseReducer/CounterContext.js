import React, { createContext, useContext, useReducer } from 'react';

const initialState = { count: 0 };

// Define the reducer
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create the context
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the counter context
export const useCounter = () => useContext(CounterContext);
