import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="counter">
      <h1>Counter Component</h1>
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter; 