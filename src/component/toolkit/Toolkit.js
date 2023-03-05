import React, { useState } from "react";
import "./Toolkit.css";
import { toolkitIcons } from "../../constantData";

function Toolkit(props) {
//   const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");
  props.handleColor(color);

  return (
    <div className="toolkit">
      <span className="toolkitContainer">
        <toolkitIcons.UndoOutlinedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.RedoOutlinedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.PrintIcon style={{ fontSize: "20" }} />
        <toolkitIcons.SpellcheckIcon style={{ fontSize: "20" }} />
        <toolkitIcons.FormatPaintIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <h5>100%</h5>
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <h5>Normal text</h5>
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <h5>Arial</h5>
        <toolkitIcons.ArrowDropDownIcon
          style={{ fontSize: "20", marginLeft: "2rem" }}
        />
        <span className="fontResizing">
          <p className="fontMinus">-</p>
          <p className="fontNumber">0</p>
          <p className="fontPlus">+</p>
        </span>
        <toolkitIcons.FormatBoldIcon
          style={{ fontSize: "20" }}
          onClick={props.handlebold}
        />
        <toolkitIcons.FormatItalicIcon
          style={{ fontSize: "20" }}
          onClick={props.handleItalic}
        />
        <toolkitIcons.FormatUnderlinedIcon
          style={{ fontSize: "20" }}
          onClick={props.handleUnderline}
        />
        <toolkitIcons.FormatColorTextIcon
          style={{ fontSize: "20" }}
          onClick={() => setShow1(!show1)}
        />
        {show1 ? (
          <>
            {" "}
            <input
              className="inputbox"
              type="color"
              onChange={(e) => setColor(e.target.value)}
            />
          </>
        ) : null}
        <toolkitIcons.CreateIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.InsertLinkIcon style={{ fontSize: "20" }} />
        <toolkitIcons.AddCommentOutlinedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.InsertPhotoOutlinedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatAlignLeftIcon
          style={{ fontSize: "20" }}
          onClick={props.handlejustifyLeft}
        />
        <toolkitIcons.FormatAlignCenterIcon
          style={{ fontSize: "20" }}
          onClick={props.handlejustifyCenter}
        />
        <toolkitIcons.FormatAlignRightIcon
          style={{ fontSize: "20" }}
          onClick={props.handlejustifyRight}
        />
        <toolkitIcons.FormatAlignJustifyIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatLineSpacingIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.PlaylistAddCheckIcon style={{ fontSize: "20" }} />
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
        <toolkitIcons.FormatListBulletedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
        <toolkitIcons.FormatListNumberedIcon style={{ fontSize: "20" }} />
        <toolkitIcons.ArrowDropDownIcon style={{ fontSize: "20" }} />
        <toolkitIcons.FormatIndentDecreaseIcon style={{ fontSize: "20" }} />
        <toolkitIcons.FormatIndentIncreaseIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatClearIcon style={{ fontSize: "20" }} />
      </span>
      <span className="toolkitContainer" style={{ marginLeft: "5rem" }}>
        <div className="titlebarEditingBtn">
          <toolkitIcons.CreateOutlinedIcon className="lockIconEditing" />
          <h5 style={{ fontSize: "20", backgroundColor: "#e8f0fe" }}>
            Editing
          </h5>
          <toolkitIcons.ArrowDropDownIcon
            style={{
              fontSize: "20",
              backgroundColor: "#e8f0fe",
              marginLeft: "2rem",
            }}
          />
        </div>
      </span>
    </div>
  );
}

export default Toolkit;
