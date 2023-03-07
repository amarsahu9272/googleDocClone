import React, { useRef, useState } from "react";
import "./Toolkit.css";
import { toolkitIcons } from "../../constantData";
import { useRecoilState } from "recoil";
import { zoomLevelAtom } from "../../RecoilState";

function Toolkit(props) {
  const fileInputRef = useRef(null);
  // const [zoomLevel, setZoomLevel] = useState(100);
  const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelAtom);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");
  const [color1, setColor1] = useState("");
  props.handleColor(color);
  props.handlebackgroundhighlight(color1);

  const handleImageClick = () => {
    fileInputRef.current.click();
    // console.log(fileInputRef)
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.className = "UploadedImageStyling";
      img.contentEditable = false;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(img);
      range.collapse(false);
    };
  };

  return (
    <div className="toolkit">
      <span className="toolkitContainer">
        <toolkitIcons.UndoOutlinedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleUndo}
        />
        <toolkitIcons.RedoOutlinedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleRedo}
        />
        <toolkitIcons.PrintIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handlePrint}
        />
        <toolkitIcons.SpellcheckIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleSpellCheck}
        />
        <toolkitIcons.FormatPaintIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span>
      {/* <span className="icon toolkitContainer">
        <h5 className="icon">100%</h5>
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span> */}
      <select
        value={zoomLevel}
        onChange={(e) => setZoomLevel(parseInt(e.target.value))}
        className="ZoomDropdown"
      >
        <option className="ZoomOption" value={50}>
          50%
        </option>
        <option className="ZoomOption" value={75}>
          75%
        </option>
        <option className="ZoomOption" value={90}>
          90%
        </option>
        <option className="ZoomOption" value={100}>
          100%
        </option>
        <option className="ZoomOption" value={125}>
          125%
        </option>
        <option className="ZoomOption" value={150}>
          150%
        </option>
      </select>

      <span className="icon toolkitContainer">
        <h5 className="icon">Normal text</h5>
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span>
      <span className="toolkitContainer">
        <h5 className="icon">Arial</h5>
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18", marginLeft: "2rem" }}
        />
        <span className="fontResizing">
          <p className="icon fontMinus">-</p>
          <p className="icon fontNumber">11</p>
          <p className="icon fontPlus">+</p>
        </span>
        <toolkitIcons.FormatBoldIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handlebold}
        />
        <toolkitIcons.FormatItalicIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleItalic}
        />
        <toolkitIcons.FormatUnderlinedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleUnderline}
        />
        <toolkitIcons.StrikethroughSTwoToneIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleStrikeThrough}
        />
        <toolkitIcons.FormatColorTextIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={() => setShow(!show)}
        />
        {show ? (
          <>
            {" "}
            <input
              className="inputbox"
              type="color"
              onChange={(e) => setColor(e.target.value)}
            />
          </>
        ) : null}
        <toolkitIcons.BrushIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={() => setShow1(!show1)}
        />
        {show1 ? (
          <>
            {" "}
            <input
              className="inputbox"
              type="color"
              onChange={(e) => setColor1(e.target.value)}
            />
          </>
        ) : null}
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.InsertLinkIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.addLink}
        />
        <toolkitIcons.AddCommentOutlinedIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
        <toolkitIcons.InsertPhotoOutlinedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={handleImageClick}
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
          value=""
        />

        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatAlignLeftIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handlejustifyLeft}
        />
        <toolkitIcons.FormatAlignCenterIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handlejustifyCenter}
        />
        <toolkitIcons.FormatAlignRightIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handlejustifyRight}
        />
        <toolkitIcons.FormatAlignJustifyIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatLineSpacingIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.PlaylistAddCheckIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
        <toolkitIcons.FormatListBulletedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleBulletList}
        />
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
        <toolkitIcons.FormatListNumberedIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleNumberedList}
        />
        <toolkitIcons.ArrowDropDownIcon
          className="icon"
          style={{ fontSize: "18" }}
        />
        <toolkitIcons.FormatIndentDecreaseIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleDecreaseIndent}
        />
        <toolkitIcons.FormatIndentIncreaseIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleIncreaseIndent}
        />
      </span>
      <span className="toolkitContainer">
        <toolkitIcons.FormatClearIcon
          className="icon"
          style={{ fontSize: "18" }}
          onClick={props.handleClearFormate}
        />
      </span>
      <span
        className="toolkitContainer"
        style={{ marginLeft: "3.5rem", border: "none" }}
      >
        <div className="titlebarEditingBtn">
          <toolkitIcons.CreateOutlinedIcon className="icon lockIconEditing" />
          <h5 style={{ fontSize: "18", backgroundColor: "#e8f0fe" }}>
            Editing
          </h5>
          <toolkitIcons.ArrowDropDownIcon
            className="icon"
            style={{
              fontSize: "18",
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
