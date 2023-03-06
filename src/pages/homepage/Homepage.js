import React from "react";
import "./Homepage.css";
import TitleBar from "../../component/titlebar/TitleBar";
import Document from "../../component/documents/Document";
import Toolkit from "../../component/toolkit/Toolkit";

function Homepage() {
  function handlePrint() {
    try {
      const inputField = document.getElementById("inputField");
      inputField.contentWindow.document.execCommand("print", false, null);
    } catch (e) {
      window.print();
    }
  }
  return (
    <div className="homePage">
      <div className="homePageHeader">
        <TitleBar />
        <Toolkit
          handleUndo={() => document.execCommand("undo", false, null)}
          handleRedo={() => document.execCommand("redo", false, null)}
          handlePrint={handlePrint}
          handleSpellCheck={document.execCommand("command", null, false)}
          handlebold={() => document.execCommand("bold")}
          handleItalic={() => document.execCommand("italic")}
          handleUnderline={() => document.execCommand("underline")}
          handleColor={(color) => document.execCommand("foreColor", "", color)}
          handlebackgroundhighlight={() =>
            document.execCommand("backColor", "", "yellow")
          }
          handlejustifyLeft={() => document.execCommand("justifyLeft")}
          handlejustifyCenter={() => document.execCommand("justifyCenter")}
          handlejustifyRight={() => document.execCommand("justifyRight")}
          handleBulletList={() => document.execCommand("insertUnorderedList")}
          handleNumberedList={() => document.execCommand("insertOrderedList")}
          handleDecreaseIndent={() => document.execCommand("outdent")}
          handleIncreaseIndent={() => document.execCommand("indent")}
          handleClearFormate={() => document.execCommand("delete", null, false)}
        />
      </div>
      <Document />
    </div>
  );
}

export default Homepage;
