import React from "react";

const Post = () => {
  return (
    <div id={scss.post}>
      <div className="container">
        <div className={scss.post}>
          <div className={scss.inputs}>
            <input type="text" placeholder="URL" />
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="PRICE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
