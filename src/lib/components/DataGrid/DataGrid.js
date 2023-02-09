import React from "react";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import "./DataGrid.scss";

function DataGrid(props) {
  return <MuiDataGrid {...props}>{props?.children}</MuiDataGrid>;
}

export default DataGrid;
