import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
    <div className="footer">
      <div className="info">Built with <span className="heart">❤️</span> by Khushi Verma</div>
      <div className="links">
        <a href="https://www.linkedin.com/in/khushiverma23"
    target="_blank"
    rel="noopener noreferrer">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M22 3.47v17.06a1.53 1.53 0 0 1-1.47 1.47H3.47A1.53 1.53 0 0 1 2 20.53V3.47A1.53 1.53 0 0 1 3.47 2h17.06A1.53 1.53 0 0 1 22 3.47ZM7.88 9.65H4.94v9.41h2.94V9.65ZM8.15 6.41a1.74 1.74 0 0 0-3.44.05 1.75 1.75 0 0 0 3.44-.05Zm10.91 6.93c0-2.83-1.8-3.93-3.59-3.93a3.95 3.95 0 0 0-3.91 2.29h-.08V9.65H9.65v9.41h2.94v-5c-.04-.51.12-1 .44-1.39a1.96 1.96 0 0 1 1.36-.73h.11c.94 0 1.63.59 1.63 2.04v5.08h2.94v-5.67Z" />
</svg>
</a>
<a href="https://github.com/Khushi23V"
    target="_blank"
    rel="noopener noreferrer">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M10 0C4.48 0 0 4.59 0 10.25c0 4.53 2.865 8.374 6.84 9.725.5.093.682-.22.682-.487 0-.24-.01-1.036-.015-1.878-2.782.622-3.37-1.384-3.37-1.384-.454-1.18-1.11-1.495-1.11-1.495-.91-.633.07-.62.07-.62 1.003.072 1.53 1.062 1.53 1.062.89 1.56 2.34 1.11 2.91.85.09-.662.35-1.11.636-1.366-2.22-.26-4.555-1.13-4.555-5.034 0-1.113.39-2.02 1.03-2.73-.104-.26-.45-1.307.098-2.724 0 0 .84-.275 2.75 1.05A9.46 9.46 0 0 1 10 4.84a9.48 9.48 0 0 1 2.5.35c1.91-1.325 2.75-1.05 2.75-1.05.55 1.417.204 2.464.1 2.724.64.71 1.03 1.617 1.03 2.73 0 3.91-2.337 4.77-4.564 5.02.36.32.68.945.68 1.905 0 1.376-.013 2.487-.013 2.825 0 .27.18.584.688.485C17.138 18.622 20 14.782 20 10.25 20 4.59 15.52 0 10 0Z" />
</svg>
</a>
      </div>
</div>
    )
}