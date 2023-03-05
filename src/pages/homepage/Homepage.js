import React from "react";
import "./Homepage.css";
import Header from "../../component/header/Header";
import TitleBar from "../../component/titlebar/TitleBar";
import Document from "../../component/documents/Document";

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

  function font1() {
    document.execCommand("fontSize", "", "1");
  }
  function font2() {
    document.execCommand("fontSize", "", "2");
  }
  function font3() {
    document.execCommand("fontSize", "", "3");
  }
  function font4() {
    document.execCommand("fontSize", "", "4");
  }
  function font5() {
    document.execCommand("fontSize", "", "5");
  }
  function font6() {
    document.execCommand("fontSize", "", "6");
  }
  function font7() {
    document.execCommand("fontSize", "", "7");
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
        <Header
          handlebold={handleBold}
          handleUnderline={handleUnderline}
          handleItalic={handleItalic}
          handlebackgroundhighlight={handlebackgroundhighlight}
          font1={font1}
          font2={font2}
          font3={font3}
          font4={font4}
          font5={font5}
          font6={font6}
          font7={font7}
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
