import React from "react";
import "./NoMatchRoutes.css";

function NoMatchRoutes() {
  return (
    <div className="noMatchRoute">
      <div>
        <span>404. That's an error</span>
        <p>The requested URL was not found on this server. </p>
        <p>That’s all we know.</p>
      </div>
    </div>
  );
}

export default NoMatchRoutes;
