import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams(); // Get the id from the URL

  // Dummy data for blog details (in a real app, you'd fetch this data)
  const blogData = {
    1: {
      title: "The Joy of React",
      content: "Detailed content about the joy of React...",
    },
    2: {
      title: "Mastering Redux",
      content: "In-depth exploration of Redux...",
    },
    3: {
      title: "Learning JavaScript",
      content: "Detailed guide on modern JavaScript...",
    },
    4: {
      title: "Learning C++",
      content: "In-depth guide on modern C++...",
    },
  };

  const blog = blogData[id]; // Get the specific blog based on id

  return (
    <div>
      {blog ? (
        <>
          <Typography variant="h2">{blog.title}</Typography>
          <Typography variant="body1">{blog.content}</Typography>
        </>
      ) : (
        <Typography variant="h6">Blog not found</Typography>
      )}
    </div>
  );
};

export default BlogDetails;
