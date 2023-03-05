import React from "react";
import "./Homepage.css";
import TitleBar from "../../component/titlebar/TitleBar";
import Document from "../../component/documents/Document";
import Toolkit from "../../component/toolkit/Toolkit";

function Homepage() {
  function handleBold() {
    document.execCommand("bold");
  }
  function handleUnderline() {
    document.execCommand("underline");
  }

  function handleItalic() {
    document.execCommand("italic");
  }

  function handlebackgroundhighlight() {
    document.execCommand("backColor", "", "yellow");
  }
  function handleColor(color) {
    document.execCommand("foreColor", "", color);
  }

  function handlejustifyCenter(color) {
    document.execCommand("justifyCenter");
  }
  function handlejustifyLeft(color) {
    document.execCommand("justifyLeft");
  }
  function handlejustifyRight(color) {
    document.execCommand("justifyRight");
  }
  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }
  return (
    <div className="homePage">
      <div className="homePageHeader">
        <TitleBar />
        <Toolkit
          handlebold={handleBold}
          handleUnderline={handleUnderline}
          handleItalic={handleItalic}
          handlebackgroundhighlight={handlebackgroundhighlight}
          handleColor={handleColor}
          handlejustifyCenter={handlejustifyCenter}
          handlejustifyLeft={handlejustifyLeft}
          handlejustifyRight={handlejustifyRight}
          handleremoveFormat={handleremoveFormat}
        />
      </div>
      <Document />
    </div>
  );
}

export default Homepage;
