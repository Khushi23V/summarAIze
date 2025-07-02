import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../styles/summaraize.css';
import p1 from '../assets/Frame 1.png';
import p2 from '../assets/Frame 2.png';
import p3 from '../assets/Frame 3.png';

export default function MainPage() {
    const[text,setText]=useState('');

    const charCountStyle = {
        color: text.length > 4000 ? '#DC143C' : 'inherit',
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
                    <img src={p3}/>
                    <p>Click the <span>Summaraize</span> button and sit tight.</p>
                </div>
            </div>
        </div>
        <div className="features">
            <h2>Features</h2>
            <div className="feature">
                <div className="f-title">
                    <h2></h2>
                    <img />
                </div>
                <p></p>
            </div>
            <div className="feature">
                <div className="f-title">
                    <h2></h2>
                    <img />
                </div>
                <p></p>
            </div>
            <div className="feature">
                <div className="f-title">
                    <h2></h2>
                    <img />
                </div>
                <p></p>
            </div>
        </div>
        <Footer />
        </>
    );
}