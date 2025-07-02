import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../styles/summaraize.css';

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
        <div className="how-to"></div>
        <div className="features"></div>
        <Footer />
        </>
    );
}