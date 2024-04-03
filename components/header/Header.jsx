import React from "react";
import "./Header.css";
import reactlogo from "../../images/reactjs-ar21.svg";
import homelogo from "../../images/home-icon-silhouette-svgrepo-com.svg";
import githublogo from "../../images/github-icon.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>CC451 LAB02</h1>
        <div className="menu">
          <a href="index.html">
            <img id="home" src={homelogo} alt="home-icon" />
          </a>
          <a href="https://github.com/Aushzlten12/Lab02-IHC">
            <img id="github" src={githublogo} alt="github-icon" />
          </a>
          <a href="https://es.react.dev/">
            <img id="react" src={reactlogo} alt="react-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
