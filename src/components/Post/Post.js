import React from "react";
import "./Post.css";
function Post(props) {
  const PostArray = Array.from({ length: 5 });
  return (
    <div>
      {PostArray.map(() => (
        <div className="container">
          <h1> {props.title} </h1>
          <hr />
          <p>{props.body} </p>
        </div>
      ))}
    </div>
  );
}

export default Post;
