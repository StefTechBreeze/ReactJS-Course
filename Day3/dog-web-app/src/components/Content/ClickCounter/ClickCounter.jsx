import React, { useState } from "react";

import "./ClickCounter.css";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>
        You clicked: <span>{count}</span> times
      </p>
    </div>
  );
};
