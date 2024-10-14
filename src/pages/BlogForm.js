// CreateBlogForm.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material"; // Import Paper for a nicer background
import { useFormik } from "formik";
import GlobalInput from "../components/UI/GlobalInput";
import GlobalButton from "../components/UI/GlobalButton";
import { blogSchema } from "../schemas/blogSchema"; // Ensure you have a validation schema

const CreateBlogForm = () => {
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    title: "",
    description: "",
  };

  const { handleChange, handleBlur, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: blogSchema, // Use a validation schema for the blog form
      onSubmit: async (values, actions) => {
        try {
          // Dispatch an action here to save the blog data to Redux or an API
          console.log("Blog created:", values);
          // Simulate a successful blog creation
          actions.resetForm();
          navigate("/blog"); // Redirect to blog page after submission
        } catch (error) {
          console.error("Failed to create blog:", error);
        }
      },
    });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4", // Light background color for contrast
      }}
    >
      <Paper
        elevation={3} // Material UI Paper with elevation for depth
        sx={{
          width: { xs: "90%", sm: "400px" },
          padding: 3,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" paddingBottom={2}>
          Create Blog
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <GlobalInput
            name="title"
            label="Blog Title"
            type="text"
            value={values.title}
            onChangehandler={handleChange}
            onBlurHandler={handleBlur}
            values={values}
            helperText={touched.title && errors.title ? errors.title : null}
          />

          <GlobalInput
            name="description"
            label="Description"
            type="text"
            value={values.description}
            onChangehandler={handleChange}
            onBlurHandler={handleBlur}
            values={values}
            helperText={
              touched.description && errors.description ? errors.description : null
            }
            multiline // Make this a multiline input for longer descriptions
            rows={4}  // Adjust number of rows as necessary
          />

          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: 3 }}>
            <GlobalButton
              variant="contained"
              color="success"
              title="Create Blog"
              type="submit"
              fullWidth // Make the button full width for better alignment
            />

            <GlobalButton
              variant="contained"
              color="secondary"
              title="Cancel"
              onClick={() => navigate("/blog")} // Redirect back to blog page
              fullWidth // Make the button full width
            />
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateBlogForm;
