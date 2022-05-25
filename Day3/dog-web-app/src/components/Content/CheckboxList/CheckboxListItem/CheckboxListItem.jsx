import React from "react";

import "./CheckboxListItem.css";

export const CheckboxListItem = ({ checked, label, onChange }) => {
  return (
    <div className="checkbox-list-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <p>{label}</p>
    </div>
  );
};
