import React from "react";
import "./Homepage.css";
import TitleBar from "../../component/titlebar/TitleBar";
import Document from "../../component/documents/Document";
import Toolkit from "../../component/toolkit/Toolkit";

function Homepage() {
  function formatDoc(cmd, value = null) {
    if (value) {
      document.execCommand(cmd, false, value);
    } else {
      document.execCommand(cmd);
    }
  }
  function addLink() {
    const url = prompt("Insert url");
    formatDoc("createLink", url);
  }

  return (
    <div className="homePage">
      <div className="homePageHeader">
        <TitleBar />
        <Toolkit
          handleUndo={() => document.execCommand("undo", false, null)}
          handleRedo={() => document.execCommand("redo", false, null)}
          handlePrint={() => window.print()}
          handleSpellCheck={document.execCommand("command", null, false)}
          handlebold={() => document.execCommand("bold")}
          handleItalic={() => document.execCommand("italic")}
          handleUnderline={() => document.execCommand("underline")}
          handleStrikeThrough={() => document.execCommand("strikeThrough")}
          handleColor={(color) => document.execCommand("foreColor", "", color)}
          handlebackgroundhighlight={(color) =>
            document.execCommand("backColor", false, color)
          }
          addLink={addLink}
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
