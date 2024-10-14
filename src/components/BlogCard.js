import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux"; // Import useDispatch for Redux
// import { deleteBlog, updateBlog } from "../Redux/Slices/blogSlice"; // Import your Redux actions

const BlogCard = ({ title, description, id }) => {
  const dispatch = useDispatch(); // Initialize dispatch

  // Function to handle delete action
//   const handleDelete = () => {
//     dispatch(deleteBlog(id)); // Dispatch delete action with blog id
//   };

  // Function to handle update action
//   const handleUpdate = () => {
//     dispatch(updateBlog(id)); // Dispatch update action with blog id
//     // You might want to navigate to the update page or open a modal here
//   };

  return (
    <Card
      sx={{
        minWidth: 330,
        maxWidth: 420,
        minHeight: 270,
        maxHeight: 370,
        margin: "20px 10px",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography sx={{ mb: 3 }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 3 }} variant="body2" color="text.secondary">
          {description}
        </Typography>
        
        {/* Icons for update and delete */}
        <div style={{ position: "absolute", top: 10, right: 10 }}>
                  <IconButton color="primary"
                    //   onClick={handleUpdate}
                  
                  >
            <EditIcon />
          </IconButton>
                  <IconButton color="secondary"
                    //   onClick={handleDelete}
                  >
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>

      <Link to={`/blogDetails/${id}`}>
        <Button
          size="small"
          color="primary"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 3,
            fontSize: "15px",
            margin: "10px",
          }}
        >
          Read More...
        </Button>
      </Link>
    </Card>
  );
};

export default BlogCard;
