import React, { useState } from "react";

// data
import blogList from "../data/blogList.json";
import Blog from "./Blog";

function Index() {
  const [currentBlog, setCurrentBlog] = useState();

  const handleBlogLinkClick = (url) => {
    setCurrentBlog(url);
  };

  const handleGoBack = () => {
    setCurrentBlog(null)
  }

  return (
    <div>
      {!currentBlog  ? (
        <>
          <h1>My Blog List</h1>
          <div>
            {blogList.map((value, index) => {
              let blogUrl =
                "https://raw.githubusercontent.com/Blankscreen-exe/host-a-blog-without-a-backend/refs/heads/main/react-sample-project/src/blogs/" +
                value.blogFileName;
              
              return (
                <div key={index}>
                  <button onClick={() => handleBlogLinkClick(blogUrl)}>
                  📒  {value.blogTitle}
                  </button><br/><br/>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div id="blog-content">
            <button onClick={handleGoBack}>Go Back</button>
            <Blog url={currentBlog}  />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default Index;
