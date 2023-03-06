import React from "react";
import "./TitleBar.css";
import DocImage from "../../utils/file.png";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Avatar } from "@mui/material";
import profilePic from "../../utils/Amr.jpg";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';
function TitleBar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <img className="docImage" src={DocImage} alt="docImage" />
        <div className="topbarUntitled">
          <div className="topbarLeftIcons">
            <h3>Untitled document</h3>
            <StarBorderOutlinedIcon style={{fontSize:"18"}}/>
            <DriveFileMoveOutlinedIcon style={{fontSize:"18"}}/>
            <CloudDoneOutlinedIcon style={{fontSize:"18"}}/>
          </div>
          <div className="topbarMenu">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Formate</span>
            <span>Tools</span>
            <span>Extension</span>
            <span>Help</span>
          </div>
        </div>
      </div>
      <div className="topbarRight">
        <CommentOutlinedIcon />
        <div className="topbarRightBtn">
          <LockIcon className="lockIconShare"/> Share
        </div>
        <Avatar src={profilePic} />
      </div>
    </div>
  );
}

export default TitleBar;
