import React, { useState } from "react";
import "./App.css";

function App() {
  const fonts = ["Arial", "Courier New", "Georgia", "Verdana", "Times New Roman"];

  const [text, setText] = useState("");
  const [fontIndex, setFontIndex] = useState(0);

  const font = fonts[fontIndex];

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  const changeFont = () => {
    setFontIndex((fontIndex + 1) % fonts.length);
  };

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const clearText = () => setText("");

  return (
    <div className="container">
      <h1>🧠 Text PreProcessing Analyzer</h1>

      <textarea
        className="textbox"
        style={{ fontFamily: font }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />

      <div className="buttonRow">
        <button onClick={toUpperCase}>UPPERCASE</button>
        <button onClick={toLowerCase}>lowercase</button>
        <button onClick={changeFont}>Font</button>

        {/* CLEAR BUTTON (RED) */}
        <button className="clearBtn" onClick={clearText}>
          Clear
        </button>
      </div>

      <div className="stats">
        <p>📊 WORDS: {wordCount}</p>
        <p>🔤 CHARACTERS: {charCount}</p>
      </div>
    </div>
  );
}

export default App;