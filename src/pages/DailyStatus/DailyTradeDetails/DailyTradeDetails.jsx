import React from "react";
import "./dailyTradeDetails.css";
import { Box, Divider } from "@mui/material";
import EditImg from "../../../assets/editNotes.png";
import DailyTradeGraph from '../DailyTradeGraph/DailyTradeGraph'
import DailyTradeTable from "./DailyTradeTable/DailyTradeTable";
import ModeChange from "../../../Theme/ChangeMode";
// import { lightTheme } from "../../../Theme/theme";

const DailyTradeDetails = () => {
  const lightTheme = ModeChange();
  const Graphs = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.02)",
    backgroundColor:`${lightTheme.ComponentBackgroundColor}`,
    // border: '1px solid black',
    borderRadius: "8px",
    marginTop: "20px",
    paddingBottom:'20px'
    };
  return (
    <div>
          <Box sx={Graphs}>
              <div className="dividerDiv">
                  
        <div className="EditNotesDiv">
          <p className="editNote" style={{color:`${lightTheme.headingTextColor}`}}>Edit Notes</p>
          <img src={EditImg} alt="EditNote" height={20} style={{color:'red'}}/>
              </div>
              <Divider />
        </div>
              <div>
          <DailyTradeGraph />
          <Divider/>
                  <DailyTradeTable />
              </div>
      </Box>
    </div>
  );
};

export default DailyTradeDetails;
