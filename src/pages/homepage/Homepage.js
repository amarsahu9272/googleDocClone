import React from "react";
import "./Homepage.css";
import TitleBar from "../../component/titlebar/TitleBar";
import Document from "../../component/documents/Document";
import Toolkit from "../../component/toolkit/Toolkit";

function Homepage() {

  return (
    <div className="homePage">
      <div className="homePageHeader">
        <TitleBar />
        <Toolkit
          handlebold={()=>(document.execCommand("bold"))}
          handleItalic={() => document.execCommand("italic")}
          handleUnderline={()=>(document.execCommand("underline"))}
          handleColor={(color)=>(document.execCommand("foreColor", "", color))}
          handlebackgroundhighlight={()=>(document.execCommand("backColor", "", "yellow"))}
          

          handlejustifyLeft={()=>(document.execCommand("justifyLeft"))}
          handlejustifyCenter={()=>(document.execCommand("justifyCenter"))}
          handlejustifyRight={()=>(document.execCommand("justifyRight"))}
         
        />
      </div>
      <Document />
    </div>
  );
}

export default Homepage;
