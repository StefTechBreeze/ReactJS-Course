import { useState } from "react";

import "./GearRotator.css";

export const GearRotator = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="gear-rotator component">
      <div onClick={() => setCounter(counter + 1)}>
        <img
          alt=""
          src="/svg/loading.svg"
          style={{ transform: `rotate(${counter * 45}deg)` }}
        />
        <p>{counter}</p>
      </div>
    </div>
  );
};
