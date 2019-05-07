import React from "react"
import GameInfo from "../GameInfo";
import "./style.css";


    function Header(props) {
      return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/"><img className="logo" src="../assets/images/ozzyLogo.png"/></a>
        </li>
        <GameInfo score={props.score} topScore={props.topScore} />
        <li>
           Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
  
    </nav>
  );
}

export default Header;
