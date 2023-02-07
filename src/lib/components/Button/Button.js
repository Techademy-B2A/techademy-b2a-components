import React from "react";
import MuiButton from "@mui/material/Button";
import "./Button.scss";

const Button = (props) => {
  return <MuiButton {...props} variant={props.variant || ""}>{props?.children}</MuiButton>;
};

export default Button;
