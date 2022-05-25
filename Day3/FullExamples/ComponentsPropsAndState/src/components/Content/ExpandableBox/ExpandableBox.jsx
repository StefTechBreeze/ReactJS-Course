import React, { useState } from "react";

import "./ExpandableBox.css";

export const ExpandableBox = ({ label, text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable-box">
      <div className="expandable-box__label-container">
        <h3 className="expandable-box__label">{label}</h3>
        <img
          src="/assets/svg/arrow.svg"
          onClick={() => setExpanded(!expanded)}
          className={`expandable-box__icon${
            expanded ? " expandable-box__icon--rotate" : ""
          }`}
        />
      </div>
      {expanded && <p className="expandable-box__description">{text}</p>}
    </div>
  );
};
