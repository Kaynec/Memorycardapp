import React, { useState, useEffect } from "react";
const Header = () => {
  return (
    <header className="header">
      <img
        src="https://pm1.narvii.com/6737/5ca43e21827f4c7eec73b42832ba8c62c196cc52v2_hq.jpg"
        alt="header-pic-attack on titan"
      />
      <p style={{ marginTop: "1rem" }}>
        Welcome To Attack on Titan Memory Card Game
      </p>
      <p>Don't click on a picture twice</p>
    </header>
  );
};
export default Header;
