import React, { useState } from "react";

import "./Tabs.css";

export const Tabs = ({ defaultTab, tabItems, children }) => {
  const [currentIndex, setCurrentIndex] = useState(defaultTab || 0);

  return (
    <div className="tabs-container">
      <div className="tabs-navigation">
        {tabItems && tabItems.length
          ? tabItems.map((label, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`tabs-navigation__item${
                  index === currentIndex
                    ? " tabs-navigation__item--selected"
                    : ""
                }`}
              >
                {label}
              </button>
            ))
          : null}
      </div>
      <div className="tabs-current-content">
        {children ? children[currentIndex] : null}
      </div>
    </div>
  );
};
