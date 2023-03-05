import React from "react";
import "./Sidebar.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <ArrowBackIcon />
        <div className="sidebarSummary">
          <span>SUMMARY</span>
          <AddIcon />
        </div>
        <div className="sidebarOutline">
          <span>OUTLINE</span>
          <p> Headings you add to the document will appear heare</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
