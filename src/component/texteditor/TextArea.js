import React from "react";

import "./TextArea.css";

function TextArea() {
  return (
    <p
      id="inputField"
      className="inputField"
      spellCheck={false}
      placeholder="@Type here"
      contentEditable={true}
    ></p>
  );
}

export default TextArea;
