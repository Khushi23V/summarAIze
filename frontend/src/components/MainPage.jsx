import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../styles/summaraize.css';
import p1 from '../assets/Frame 1.png';
import p2 from '../assets/Frame 2.png';
import p3 from '../assets/Frame 3.png';
import add from '../assets/add.png';
import minus from '../assets/minus.png';

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
                    <img src={p1}/>
                    <p>Type or paste your text into the box above.</p>
                </div>
                <div className="points">
                    <img src={p2}/>
                    <p>Choose a mode (Academic, Friendly, Formal, Professional).</p>
                </div>
                <div className="points">
                    <img src={p3} />
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
      <img src={open1 ? minus : add} className="icon" />
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
      <img src={open2 ? minus : add} className="icon" />
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
      <img src={open3 ? minus : add} className="icon" />
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

const data=[
    {
        question: 'Language Support',
        answer:'Summarize content in your preferred language. Our app supports multiple languages, making it accessible for a global audience and ideal for multilingual learners and professionals.',
    },
    {
        question: 'Multiple Modes',
        answer:'Choose how you want your content summarized. With options like Academic, Friendly, Formal, and Professional, you get tailored outputs that fit different tones and contexts.',
    },
    {
        question: 'Smart Summaries',
        answer:'Get concise, intelligent summaries that capture the core ideas of your content. Whether it’s notes, articles, or documents, our AI distills key points without losing context or meaning.',
    }
]