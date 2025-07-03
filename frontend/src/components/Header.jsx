import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/LogoAi (1).png';

export default function Header() {
  return (
    <header className="head">
      <div className="navbar">
        <div className="name">
          <Link to="/"><img src={logo} alt="App logo" className="logo" /></Link>
          <h1><Link to="/" className="title">summarAIze</Link></h1>
        </div>
        <div className="options">
          <h2><Link to="#" className="nav-link">How To</Link></h2>
          <h2><Link to="#" className="nav-link">Features</Link></h2>
          <button className="button1">
            <Link to="#" className="nav-link2">Begin</Link>
          </button>
          <button className="theme-switch">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 960 960"
  className="w-6 h-6 fill-current text-[rgb(0,194,203)]"
>
  <path d="M480 840q-150 0-255-105T120 480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444 300q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480 840Z"/>
</svg>


            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-2"
            >
              <g clipPath="url(#a)">
                <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="currentColor" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="menu">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6"
>
  <path d="M4 6H20M4 12H20M4 18H20" />
</svg>

        </div>
      </div>
    </header>
  );
}
