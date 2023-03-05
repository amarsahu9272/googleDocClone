import React from "react";
import "./Document.css";
import Sidebar from "../../component/sidebar/Sidebar";
import TextArea from "../../component/texteditor/TextArea";
import Widgets from "../../component/widgets/Widgets";

function Document() {
  return (
    <div className="document">
      <Sidebar />
      <TextArea />
      <Widgets/>
    </div>
  );
}

export default Document;
