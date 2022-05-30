import { useState } from "react";

import "./ParagraphAdder.css";

export const ParagraphAdder = () => {
  const [paragraphs, setParagraphs] = useState([]);

  return (
    <div className="paragraph-adder component">
      <h1>Ovidiu</h1>
      <input
        placeholder="add paragraph"
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.target.value) {
            setParagraphs([...paragraphs, event.target.value]);
            event.target.value = "";
          }
        }}
      />
      <div className="paragraph-adder">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
