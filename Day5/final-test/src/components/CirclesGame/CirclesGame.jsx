import { useEffect, useState } from "react";

import "./CirclesGame.css";

const colors = ["red", "green", "blue"];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * 3)];
};

export const CirclesGame = () => {
  const [leftColor, setLeftColor] = useState(getRandomColor());
  const [rightColor, setRightColor] = useState(getRandomColor());
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setLeftColor(getRandomColor());
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setRightColor(getRandomColor());
    }, 1000);
  }, []);

  return (
    <div className="circles-game component">
      <div className="colors-container">
        <div className="left-color" style={{ background: leftColor }} />
        <div className="right-color" style={{ background: rightColor }} />
      </div>
      <button
        className="colors-check-button"
        onClick={() => {
          if (leftColor === rightColor) {
            setWins(wins + 1);
          } else {
            setLosses(losses + 1);
          }
        }}
      >
        Check Color
      </button>
      <div className="colors-score">
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
      </div>
    </div>
  );
};
