import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { lightTheme } from "../../Theme/theme";
import NavBar from "../../components/NavBar/NavBar";
import "./journal.css";
import JournalComponent from "../JournalSetting/JournalComponent";

const Journal = () => {
  const mainDiv = {
    padding: "30px 25px",
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
    // border:'1px solid black',

    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
 
  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={"Journal Settings"} />
        <JournalComponent/>
      </Box>
    </div>
  );
};

export default Journal;
