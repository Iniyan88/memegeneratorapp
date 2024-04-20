import React from "react";
import troll from "./troll-removebg-preview.png";

export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="nothing" className="header-img"></img>
      <h2 className="header-h2">Meme Generator !!</h2>
      <h4 className="header-h4">Laugh Out Loud</h4>
    </header>
  );
}
