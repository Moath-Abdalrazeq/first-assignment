import React from "react";
import "./Post.css";
function Post() {
  const PostArray = Array.from({ length: 5 });
  return (
    <div>
      {PostArray.map((_, index) => (
        <div className="container">
          <h1>This is a post title </h1>
          <hr />
          <p>This is a post body</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
