import React from "react";
import MuiTab from "@mui/material/Tab";
import "./Tab.scss";

const Tab = (props) => {
  return <MuiTab {...props}>{props?.children}</MuiTab>;
};

export default Tab;
