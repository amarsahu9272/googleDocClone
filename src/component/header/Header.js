import React, { useState } from 'react'
import './Header.css'
import { toolkitIcons } from '../../constantData';

function Header(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");
  props.handleColor(color);
  
  return (
    <div className="header">
      <span className="headerContainer">
        <toolkitIcons.FormatBoldIcon style={{ fontSize: "22" }} onClick={props.handlebold} />
        <toolkitIcons.FormatItalicIcon
          style={{ fontSize: "22" }}
          onClick={props.handleItalic}
        />
        <toolkitIcons.FormatUnderlinedIcon
          style={{ fontSize: "22" }}
          onClick={props.handleUnderline}
        />
        <span className="colorbox">
          <toolkitIcons.GoogleIcon
            style={{ fontSize: "18" }}
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
        </span>
      </span>

      <span className="headerContainer">
        <toolkitIcons.TextDecreaseIcon
          style={{ fontSize: "22" }}
          onClick={props.handleFontSizeh1}
        />
        <toolkitIcons.TextIncreaseIcon
          style={{ fontSize: "22" }}
          onClick={props.handleFontSizeh2}
        />
      </span>
      <span className="headerContainer">
        <div className="fontsizecontainer">
          <toolkitIcons.FormatSizeIcon
            style={{ fontSize: "22" }}
            onClick={() => setShow(!show)}
          />
          {show ? (
            <div className="fontlist">
              <toolkitIcons.LooksOneIcon onClick={props.font1} />
              <toolkitIcons.LooksTwoIcon onClick={props.font2} />
              <toolkitIcons.Looks3Icon onClick={props.font3} />
              <toolkitIcons.Looks4Icon onClick={props.font4} />
              <toolkitIcons.Looks5Icon onClick={props.font5} />
              <toolkitIcons.Looks6Icon onClick={props.font6} />
              <p onClick={props.font7}>7</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </span>

      <span className="headerContainer">
        <toolkitIcons.FormatAlignCenterIcon
          style={{ fontSize: "22" }}
          onClick={props.handlejustifyCenter}
        />
        <toolkitIcons.FormatAlignLeftIcon style={{ fontSize: "22" }} onClick={props.handlejustifyLeft}/>
        <toolkitIcons.FormatAlignRightIcon style={{ fontSize: "22" }} onClick={props.handlejustifyRight}/>
      </span>
      <span className="headerContainer">
        <toolkitIcons.SubscriptIcon />
        <toolkitIcons.SuperscriptIcon />
      </span>
      <span className="headerContainer">
        <toolkitIcons.FormatIndentDecreaseIcon style={{ fontSize: "22" }} />
        <toolkitIcons.FormatIndentIncreaseIcon style={{ fontSize: "22" }} />
      </span>
      <span className="headerContainer">
        <p >Normal</p>
        <toolkitIcons.UnfoldMoreIcon onClick={props.handleremoveFormat}/>
      </span>
      <span className="headerContainer">
        <p>Normal</p>
        <toolkitIcons.UnfoldMoreIcon />
      </span>
      <span className="headerContainer">
        <toolkitIcons.TextFormatIcon onClick={props.handlebackgroundhighlight} />
        <toolkitIcons.FormatShapesIcon style={{ fontSize: "22" }} />
      </span>
      <span className="headerContainer">
        <p>Sans Serif</p>
        <toolkitIcons.UnfoldMoreIcon />
      </span>
    </div>

  )
}

export default Header
