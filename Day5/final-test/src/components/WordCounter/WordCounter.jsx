import { useState } from "react";

import "./WordCounter.css";

export const WordCounter = () => {
  const [numOfWords, setNumOfWords] = useState(0);

  return (
    <div className="words-counter component">
      <textarea
        onChange={(event) => {
          setNumOfWords(event.target.value.split(" ").length);
        }}
      />
      <p>
        This have typed <span>{numOfWords}</span> words
      </p>
    </div>
  );
};
