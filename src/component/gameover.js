import React, { useState } from "react";
import Gameboard from "./gameboard";

const Gameover = (props) => {
  const { setGameOver, score, setScore, highScore } = props;
  const gameover = React.useRef();
  const startAgain = (e) => [
    setGameOver((prev) => false),
    setScore((prev) => 0),
  ];
  React.useEffect(() => {
    gameover.current.classList.add("box", "faded-out");
    requestAnimationFrame(() => {
      gameover.current.classList.remove("faded-out");
    });
  });
  return (
    <div className="gameover" ref={gameover}>
      <p>Better Luck Next Time</p>
      <p>Your Highest Score :{highScore}</p>
      <div>
        <button type="button" onClick={startAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default React.memo(Gameover);
