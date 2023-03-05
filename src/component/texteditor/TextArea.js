import React, { useState } from "react";

import "./TextArea.css";

function TextArea() {
  const [selectedWord, setSelectedWord] = useState("");
  function handleSelection() {
    const selection = window.getSelection();
    const selectedWord = selection.toString().trim();
    setSelectedWord(selectedWord);
  }

  return (
    <p
      className="inputField"
      onMouseUp={handleSelection}
      spellCheck={false}
      placeholder="@Type here"
      contentEditable={true}
    ></p>
   
  );
}

export default TextArea;
