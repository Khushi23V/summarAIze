import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../styles/summaraize.css';

const AddIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className={className}>
    <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/>
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className={className}>
    <path d="M240-460v-40h480v40H240Z"/>
  </svg>
);


export default function MainPage() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const[text,setText]=useState('');

    const charCountStyle = {
        color: text.length > 4000 ? '#dc143c' : '#8e8e93',
    };

    return (
        <>
        <Header />
        <div className="begin">
            <div className="text-input">
                <textarea  value={text} onChange={(c)=> setText(c.target.value)} placeholder="Enter or paste your text here" ></textarea>
                <div className="char-count" style={charCountStyle}>{text.length}/4000 characters</div>
            </div>
            <div className="summary-modes">
                <label><input type="radio" name="mode" className="mode-btn" value="academic" />Academic</label>
                <label><input type="radio" name="mode" className="mode-btn" value="friendly" />Friendly</label>
                <label><input type="radio" name="mode" className="mode-btn" value="formal" />Formal</label>
                <label><input type="radio" name="mode" className="mode-btn" value="professional" />Professional</label>
            </div>
            <button className="summaraize">SUMMARAIZE</button>
        </div>
        <div className="summary">
            <div className="summary-output">
                <h2>Summary</h2>
                <button className="copy">COPY</button>
            </div>
        </div>
        <div className="how-to">
            <h2>How to use</h2>
            <p>Using summarAIze is super easy. Just follow these steps:</p>
            <div className="how-to-points">
                <div className="points">
                    <svg width="87" height="87" viewBox="0 0 87 87" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clipA)">
    <rect width="87" height="87" rx="2" fill="currentColor" />
    <rect x="19.8477" y="18.3618" width="52.4414" height="52.4414" rx="3"
      transform="rotate(-3.02547 19.8477 18.3618)" fill="rgb(0,194,203)" />
    <path d="M24.1307 13.2372L68.712 26.2491C68.9771 26.3265 69.1293 26.6041 69.0519 26.8692L56.0401 71.4505C55.9627 71.7156 55.6851 71.8677 55.42 71.7904L10.8387 58.7785C10.5736 58.7011 10.4214 58.4235 10.4988 58.1585L23.5106 13.5771C23.588 13.312 23.8656 13.1599 24.1307 13.2372Z"
      fill="currentColor" stroke="rgb(0,194,203)" strokeWidth="5" />
    <path d="M38.12 36.912H35.816V34.2H41.36V51H38.12V36.912Z" fill="rgb(0,194,203)" />
  </g>
  <defs>
    <clipPath id="clipA">
      <rect width="87" height="87" rx="2" fill="currentColor" />
    </clipPath>
  </defs>
</svg>
                    <p>Type or paste your text into the box above.</p>
                </div>
                <div className="points">
                    <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clipB)">
    <rect width="87" height="87" rx="2" fill="currentColor" />
    <rect x="19.8477" y="18.3618" width="52.4414" height="52.4414" rx="3" transform="rotate(-3.02547 19.8477 18.3618)" fill="rgb(0,194,203)" />
    <path d="M24.1307 13.2372L68.7121 26.2491C68.9771 26.3265 69.1293 26.6041 69.0519 26.8692L56.0401 71.4505C55.9627 71.7156 55.6851 71.8677 55.42 71.7904L10.8387 58.7785C10.5736 58.7011 10.4214 58.4235 10.4988 58.1585L23.5107 13.5771C23.588 13.312 23.8656 13.1599 24.1307 13.2372Z" fill="currentColor" stroke="rgb(0,194,203)" strokeWidth="5" />
    <path d="M33.128 48.648L37.808 44.256C38.672 43.44 39.352 42.752 39.848 42.192C40.36 41.632 40.72 41.12 40.928 40.656C41.152 40.176 41.264 39.68 41.264 39.168C41.264 38.464 41.072 37.896 40.688 37.464C40.32 37.016 39.696 36.792 38.816 36.792C38.288 36.792 37.832 36.92 37.448 37.176C37.064 37.416 36.768 37.768 36.56 38.232C36.352 38.696 36.24 39.256 36.224 39.912H33.104C33.136 38.552 33.416 37.44 33.944 36.576C34.472 35.712 35.168 35.072 36.032 34.656C36.896 34.24 37.856 34.032 38.912 34.032C40.144 34.032 41.184 34.256 42.032 34.704C42.88 35.136 43.512 35.728 43.928 36.48C44.36 37.232 44.576 38.096 44.576 39.072C44.576 39.792 44.448 40.48 44.192 41.136C43.952 41.792 43.536 42.488 42.944 43.224C42.352 43.96 41.528 44.808 40.472 45.768L37.688 48.288H44.96V51H33.128V48.648Z" fill="rgb(0,194,203)" />
  </g>
  <defs>
    <clipPath id="clipB">
      <rect width="87" height="87" rx="2" fill="currentColor" />
    </clipPath>
  </defs>
</svg>
                    <p>Choose a mode (Academic, Friendly, Formal, Professional).</p>
                </div>
                <div className="points">
                    <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" >
  <g clipPath="url(#clipC)">
    <rect width="87" height="87" rx="2" fill="currentColor" />
    <rect x="19.8477" y="18.3618" width="52.4414" height="52.4414" rx="3" transform="rotate(-3.02547 19.8477 18.3618)" fill="rgb(0,194,203)" />
    <path d="M24.1307 13.2372L68.7121 26.2491C68.9771 26.3265 69.1293 26.6041 69.0519 26.8692L56.0401 71.4505C55.9627 71.7156 55.6851 71.8677 55.42 71.7904L10.8387 58.7785C10.5736 58.7011 10.4214 58.4235 10.4988 58.1585L23.5107 13.5771C23.588 13.312 23.8656 13.1599 24.1307 13.2372Z" fill="currentColor" stroke="rgb(0,194,203)" strokeWidth="5" />
    <path d="M33.32 38.952C33.368 37.88 33.64 36.984 34.136 36.264C34.648 35.528 35.328 34.976 36.176 34.608C37.04 34.224 38.032 34.032 39.152 34.032C40.32 34.032 41.312 34.248 42.128 34.68C42.944 35.112 43.568 35.688 44 36.408C44.432 37.128 44.648 37.92 44.648 38.784C44.648 39.44 44.512 40.016 44.24 40.512C43.984 40.992 43.648 41.392 43.232 41.712C42.816 42.016 42.4 42.248 41.984 42.408V42.504C42.576 42.68 43.096 42.936 43.544 43.272C43.992 43.608 44.336 44.032 44.576 44.544C44.832 45.056 44.96 45.68 44.96 46.416C44.96 47.36 44.736 48.192 44.288 48.912C43.84 49.616 43.192 50.168 42.344 50.568C41.512 50.968 40.488 51.168 39.272 51.168C38.072 51.168 37.016 50.992 36.104 50.64C35.192 50.288 34.472 49.728 33.944 48.96C33.416 48.176 33.128 47.144 33.08 45.864H36.248C36.28 46.728 36.528 47.368 36.992 47.784C37.456 48.2 38.192 48.408 39.2 48.408C39.776 48.408 40.248 48.32 40.616 48.144C40.984 47.968 41.256 47.712 41.432 47.376C41.608 47.04 41.696 46.632 41.696 46.152C41.696 45.224 41.392 44.608 40.784 44.304C40.192 44 39.256 43.848 37.976 43.848H37.304V41.256H38C38.672 41.24 39.264 41.176 39.776 41.064C40.288 40.936 40.68 40.728 40.952 40.44C41.24 40.136 41.384 39.72 41.384 39.192C41.384 38.504 41.192 37.936 40.808 37.488C40.424 37.024 39.84 36.792 39.056 36.792C38.48 36.792 38.016 36.896 37.664 37.104C37.312 37.312 37.032 37.576 36.824 37.896C36.632 38.216 36.52 38.568 36.488 38.952H33.32Z" fill="rgb(0,194,203)" />
  </g>
  <defs>
    <clipPath id="clipC">
      <rect width="87" height="87" rx="2" fill="currentColor" />
    </clipPath>
  </defs>
</svg>
                    <p>Click the <span>Summaraize</span> button and sit tight.</p>
                </div>
            </div>
        </div>
        <div className="features">
  <h2>Features</h2>
<div className="f-begin">
  <div className="feature" >
    <div className="f-title" onClick={() => setOpen1(!open1)}>
      <p>Language Support</p>
      {open1 ? <MinusIcon className="icon" /> : <AddIcon className="icon" />}
    </div>
    {open1 && (
      <div className="f-info active">
        <p>Summarize content in your preferred language. Our app supports multiple
          languages, making it accessible for a global audience and ideal for multilingual learners and professionals.</p>
      </div>
    )}
  </div>

  <div className="feature">
    <div className="f-title" onClick={() => setOpen2(!open2)}>
      <p>Multiple Modes</p>
      {open2 ? <MinusIcon className="icon" /> : <AddIcon className="icon" />}
    </div>
    {open2 && (
      <div className="f-info active">
        <p>Choose how you want your content summarized. With options like Academic,
          Friendly, Formal, and Professional, you get tailored outputs that fit different tones and contexts.</p>
      </div>
    )}
  </div>

  <div className="feature">
    <div className="f-title" onClick={() => setOpen3(!open3)}>
      <p>Smart Summaries</p>
      {open3 ? <MinusIcon className="icon" /> : <AddIcon className="icon" />}
    </div>
    {open3 && (
      <div className="f-info active">
        <p>Get concise, intelligent summaries that capture the core ideas of your
          content. Whether it’s notes, articles, or documents, our AI distills key points without losing context or meaning.</p>
      </div>
    )}
  </div>
  </div>
</div>

        <Footer />
        </>
    );
}
