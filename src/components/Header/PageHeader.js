import React from "react";
import "./PageHeader.css";
function PageHeader(props) {
  return (
    <header className="Header">
      <p>{props.header}</p>
    </header>
  );
}

export default PageHeader;
