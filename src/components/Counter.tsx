import React, { useState } from "react";
import classes from './Counter.module.scss'
export function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={classes.btn}>
      {count}
      <button onClick={handleClick}>Plus</button>
    </div>
  );
}
