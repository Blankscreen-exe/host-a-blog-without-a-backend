import React, { useState, useEffect } from "react";
import showdown from "showdown";

function Blog(props) {
  const { url } = props;

  const [htmlContent, setHtmlContent] = useState(""); // State to store the HTML content
  const converter = new showdown.Converter({tables: true}); // Initialize the showdown converter

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(url); // Fetch markdown content from the URL
        if (!response.ok) {
          throw new Error(`Error fetching markdown: ${response.statusText}`);
        }
        const markdown = await response.text();
        const html = converter.makeHtml(markdown); // Convert markdown to HTML
        setHtmlContent(html);
      } catch (error) {
        console.error("Error fetching or converting markdown:", error);
      }
    };

    if (url) {
      fetchMarkdown();
    }
  }, [url, converter]);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }} // Render the HTML content
      />
    </div>
  );
}

export default Blog;
