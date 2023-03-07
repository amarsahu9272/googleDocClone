import React from "react";
import { useRecoilValue } from "recoil";
import { zoomLevelAtom } from "../../RecoilState";

import "./TextArea.css";

function TextArea() {
  const zoomLevel = useRecoilValue(zoomLevelAtom);
  return (
    <p
      id="inputField"
      className="inputField"
      spellCheck={false}
      placeholder="@Type here"
      contentEditable={true}
      style={{
        transform: `scale(${zoomLevel / 100})`,
        marginTop: zoomLevel > 125 ? "20rem" : zoomLevel > 100 ? "10rem" : "0",
      }}
    ></p>
  );
}

export default TextArea;
