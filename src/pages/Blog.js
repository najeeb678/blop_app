import React from "react";
import BlogCard from "../components/BlogCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      title: "The Joy of React",
      description:
        "A beginner's guide to building modern web applications with React.",
    },
    {
      id: 2,
      title: "Mastering Redux",
      description: "Deep dive into state management using Redux and toolkit.",
    },
    {
      id: 3,
      title: "Learning JavaScript",
      description:
        "Comprehensive guide to modern JavaScript features and techniques.",
    },
    {
      id: 4,
      title: "Learning C++",
      description: "Comprehensive guide to modern C++ features and techniques.",
    },
  ];

  return (
    <div className={`${styles.cardContainer}`}>
      <Typography
        variant="h2"
        sx={{ padding: "20px", margin: "50px", fontWeight: "bold" }} // Changed Padding to padding and fontStyle to fontWeight
      >
        Your Daily Blogs
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/createBlog")} // Navigate to create blog
          sx={{ marginBottom: "10px", maxHeight: "35px" }}
        >
          Create Blog
        </Button>
      </Box>
      <Grid container spacing={1}>
        {dummyData.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={3}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              key={blog.id}
              id={blog.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogPage;
