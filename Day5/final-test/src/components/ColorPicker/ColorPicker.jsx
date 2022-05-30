import { useState } from "react";

import "./ColorPicker.css";

const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

export const ColorPicker = () => {
  const [currentColor, seCurrentColor] = useState(colors[0]);

  return (
    <div className="color-picker component">
      <h1>Andreea</h1>
      <div className="color-picker_list">
        {colors.map((color) => {
          return (
            <div
              key={color}
              onClick={() => {
                seCurrentColor(color);
              }}
              className={
                "color-picker_item" +
                (color === currentColor ? " color-picker_item--selected" : "")
              }
            >
              <div style={{ background: color }} />
            </div>
          );
        })}
      </div>
      <div className="color-picker_item__current">
        <div className="color-picker_item">
          <div style={{ background: currentColor }} />
        </div>
        <p>{currentColor}</p>
      </div>
    </div>
  );
};
