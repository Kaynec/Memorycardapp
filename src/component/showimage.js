import React, { useState, useEffect, useRef } from "react";
import gameover from "./gameover";

export const ShowImages = (props) => {
  //
  // The array of clicked alamenets ,Score and  div image holder
  const [clicked, setClicked] = useState([]);
  const { setScore, setGameOver, gameover } = props;
  const imageHolder = useRef();

  // cfunction that changes picture
  const changePic = (images) => {
    let lastNumber = [];
    let i = 0;
    do {
      let getRandomNumber = Math.floor(Math.random() * 27) + 1;
      if (lastNumber.indexOf(getRandomNumber) < 0) {
        lastNumber.push(getRandomNumber);
      }
      i++;
    } while (lastNumber.length < 8);
    images.forEach((img, i) => {
      img.src = `https://olleonew.sirv.com/Images/${lastNumber[i]}.jpg`;
    });
  };
  // first we run the function and after that we add event listener to it and remove it later on
  useEffect(() => {
    let images = [...imageHolder.current.querySelectorAll("img")];
    changePic(images);
    //
    // Handle the game status
    const handleScore = (e) => {
      if (clicked.indexOf(e.target.src) < 0) {
        setClicked((prev) => [...prev, e.target.src]);
        setScore((prev) => prev + 1);
        changePic(images);
      } else {
        setGameOver((prev) => true);
        setClicked((prev) => []);
      }
    };
    //
    images.forEach((img) => {
      img.addEventListener("click", handleScore);
    });
    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", handleScore);
      });
    };
  });
  // The pictures (currently without src)
  return (
    <div className="imageHolder" ref={imageHolder}>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="img">
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default React.memo(ShowImages);
