import React from "react";
import "./TagButton.css";
function TagButton() {
  const TagButtonArray = Array.from({ length: 13 });
  return (
    <div className="TButton">
      <div className="ButtonRow">
        {TagButtonArray.map(() => (
          <button className="TagButton">Tag Button</button>
        ))}
      </div>
    </div>
  );
}

export default TagButton;
