import React, { useState } from "react";
import './Counter.scss'
export function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {count}
      <button onClick={handleClick}>Plus</button>
    </div>
  );
}
