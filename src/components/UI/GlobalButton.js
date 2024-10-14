import { Button } from "@mui/material";
import React from "react";

const GlobalButton = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  title = "Button",
  onClick = () => {},
}) => {
  return (
    <Button onClick={onClick} color={color} size={size} variant={variant}>
      {title}
    </Button>
  );
};

export default GlobalButton;
