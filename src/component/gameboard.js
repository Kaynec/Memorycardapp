import React, { useState, useEffect } from "react";
import ShowImages from "./showimage";
import Gameover from "./gameover";
const Gameboard = (props) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  //
  const compareNum = () => {
    if (score > highScore) {
      setHighScore(score);
      window.localStorage.setItem("num", JSON.stringify(highScore));
    }
  };
  useEffect(() => {
    const lastNum = window.localStorage.getItem("num");
    if (lastNum) setHighScore(+lastNum + 1);
    compareNum();
  }, [score]);
  return (
    <>
      <div className="Score">
        <span>Your Current Score:{score}</span>
        <span>Your Highest Score:{highScore}</span>
      </div>
      <ShowImages
        setScore={setScore}
        gameover={gameOver}
        setGameOver={setGameOver}
      />
      {gameOver ? (
        <Gameover
          score={score}
          highScore={highScore}
          setGameOver={setGameOver}
          setScore={setScore}
        />
      ) : null}
    </>
  );
};
export default Gameboard;
