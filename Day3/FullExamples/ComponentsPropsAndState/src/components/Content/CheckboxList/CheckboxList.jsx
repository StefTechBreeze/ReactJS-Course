import React, { useState } from "react";
import { CheckboxListItem } from "./CheckboxListItem/CheckboxListItem";

const groceries = [
  { id: "water", label: "Water in bottle" },
  { id: "apples", label: "Granny Smith Apples" },
  { id: "milk", label: "Barista Milk" },
  { id: "meat", label: "Pork Meat" },
  { id: "candies", label: "Gummy Bears" },
];

export const CheckboxList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="checkbox-list">
      <h3>This is a list of groceries checkbox items</h3>

      {groceries.map((grocery) => {
        return (
          <CheckboxListItem
            key={grocery.id}
            id={grocery.id}
            checked={selectedItems.includes(grocery.id)}
            label={grocery.label}
            onChange={(checked) => {
              setSelectedItems(
                checked
                  ? [...selectedItems, grocery.id]
                  : selectedItems.filter((id) => id !== grocery.id)
              );
            }}
          />
        );
      })}
    </div>
  );
};
