import React, { useState } from "react";
import { Link } from "react-router-dom";

const DarkIcon=({className})=>(
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 960 960"
  className={className}
>
  <path d="M480 840q-150 0-255-105T120 480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444 300q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480 840Z"/>
</svg>
);
const LightIcon=({className})=>(
<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={className}
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
            );

export default function Header() {

const [mode,setMode]=useState(true)

const setDarkMode=()=>{
  setMode(!mode);
  document.body.classList.toggle("dark-mode")
}

  return (
    <header className="head">
      <div className="navbar">
        <div className="name">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clipD)">
    <rect width="90" height="90" fill="currentColor"/>
    <rect x="18.1016" y="14.3704" width="65.0391" height="65.0391" rx="3" transform="rotate(-3.02547 18.1016 14.3704)" fill="rgb(0,194,203)"/>
    <path d="M22.89 7.23625L79.5644 23.7777C79.8295 23.8551 79.9817 24.1327 79.9043 24.3978L63.3628 81.0722C63.2855 81.3373 63.0079 81.4894 62.7428 81.4121L6.06835 64.8706C5.80327 64.7933 5.6511 64.5156 5.72846 64.2506L22.2699 7.57614C22.3473 7.31105 22.6249 7.15889 22.89 7.23625Z" fill="currentColor" stroke="rgb(0,194,203)" strokeWidth="5"/>
    <path d="M45.838 41.3172C49.2347 41.2921 51.9735 38.1617 51.9544 34.3264L51.9629 18.5006C51.9488 15.523 49.791 13.1162 47.1539 13.1365C44.5167 13.1569 42.3825 15.5963 42.3971 18.5735L42.3971 20.9335C42.4072 23.0645 46.0748 20.9344 47.1571 20.9335C47.1612 22.4545 45.7828 22.1703 46.0748 20.9344C45.2312 21.326 44.8015 24.0217 46.0748 20.9344C46.0748 20.9344 45.332 19.7777 47.1571 20.9335C45.3238 19.7725 43.7635 20.9344 43.7635 20.9344L43.7635 18.564C43.7534 16.433 45.274 14.6951 47.1612 14.6805C49.048 14.6654 50.5859 16.3808 50.5955 18.5112L50.5877 34.1825C50.6018 37.1657 48.4709 39.6012 45.8309 39.6195C43.1874 39.6404 41.0355 37.2401 41.0214 34.257L40.9649 22.444C40.9633 22.0157 40.6568 21.6738 40.278 21.6778C39.8997 21.6802 39.596 22.0274 39.5985 22.4545L39.6557 34.4214C39.6729 38.2567 42.4413 41.3446 45.838 41.3172Z" fill="rgb(0,194,203)"/>
  </g>
  <defs>
    <clipPath id="clipD">
      <rect width="90" height="90" fill="currentColor"/>
    </clipPath>
  </defs>
</svg>
          <h1><Link to="/" className="title">summarAIze</Link></h1>
        </div>
        <div className="options">
          <h2><Link to="#" className="nav-link">How To</Link></h2>
          <h2><Link to="#" className="nav-link">Features</Link></h2>
          <button className="button1">
            <Link to="#" className="nav-link2">Begin</Link>
          </button>
          <button className="theme-switch" onClick={()=>setDarkMode()}>
            {mode? <DarkIcon className="ts-icon"/> : <LightIcon className="ts-icon"/>}
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
