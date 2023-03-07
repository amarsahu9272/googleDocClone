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
        <Toolkit />
      </div>
      <Document />
    </div>
  );
}

export default Homepage;
