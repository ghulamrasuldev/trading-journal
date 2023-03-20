import React, { useState } from "react";
import "./TradeTable.css";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EyeIcon from "../../../../assets/EyeView.png";
import DelIcon from "../../../../assets/delBaskit.png";
import { lightTheme } from "../../../../Theme/theme";

const TradeTable = () => {
  const mainDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: "25px",
    borderRadius: "8px",
  };

  const TradeData = [
    {
          date: '08-23-2022 09:34:37',
          spread: 'single',
          instrument: '865 PUT',
           QTY: '10',
          price: '$12.2',
          commision: '$2.34',
          Fee: '$0.11',
          position: '10',
          AdjCost: '$23.12',
          AdjProceed: '-',
           GrossPL:'-'
    
    },
    {
        date: '08-23-2022 09:34:37',
          spread: 'single',
          instrument: '865 PUT',
           QTY: '10',
          price: '$12.2',
          commision: '$2.34',
          Fee: '$0.11',
          position: '10',
          AdjCost: '-',
          AdjProceed: '$2313.21',
          GrossPL:'$9233.32'
    
    },
    {
        date: '08-23-2022 09:34:37',
          time: '09:34:37',
          spread: 'single',
          instrument: '865 PUT',
           QTY: '10',
          price: '$12.2',
          commision: '$2.34',
          Fee: '$0.11',
          position: '10',
          AdjCost: '-',
          AdjProceed: '$2313.21',
          GrossPL:'$9233.32'
    
    },
    {
        date: '08-23-2022 09:34:37',
          time: '09:34:37',
          spread: 'single',
          instrument: '865 PUT',
           QTY: '10',
          price: '$12.2',
          commision: '$2.34',
          Fee: '$0.11',
          position: '10',
          AdjCost: '-',
          AdjProceed: '$2313.21',
          GrossPL:'$9233.32'
    
    },
    {
        date: '08-23-2022 09:34:37',
          time: '09:34:37',
          spread: 'single',
          instrument: '865 PUT',
           QTY: '10',
          price: '$12.2',
          commision: '$2.34',
          Fee: '$0.11',
          position: '10',
          AdjCost: '-',
          AdjProceed: '$2313.21',
           GrossPL:'$9233.32'
    },
  ];

    const [tradeTable, setTradeTable] = useState(TradeData);
    
    const handleDelete = (index,e) => {
        const filterData = tradeTable.filter((data, i) => i !== index)
        setTradeTable(filterData)
    }

  return (
    <div>
      <Box sx={mainDiv}>
        <div className="tradeTable">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                              <TableRow>
                                  
                              <TableCell
                    align="right"
                    style={{
                      color: `${lightTheme.headingTextColor}`
                    }}
                  >
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: `${lightTheme.headingTextColor}`,
                      textAlign: "left",
                    }}
                  >
                    Date/Time
                    <br />
                    <span>US/Eastern</span>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    Spread
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    Instrument
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    QTY <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      color: `${lightTheme.headingTextColor}`
                    }}
                  >
                    Price <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="right"
                                      style={{ color: `${lightTheme.headingTextColor}` }}
                                      padding="none"
                  >
                    Commission<img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                   Fee <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    Position <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    Adjusted_Cost <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                  Adjusted_proceed <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                  Gross P&L <img src={EyeIcon} alt="" height={10} />
                  </TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {tradeTable.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: `${lightTheme.textColor}`,cursor:'pointer' }}
                    >
                     <img src={DelIcon} alt="deleteIcon" height={20} onClick={(e)=>handleDelete(index,e)}/>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.date.split(' ')[0]}<br/>
                      {row.date.split(' ')[1]}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.spread}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                            {row.date.split(' ')[0]}<br />
                            {row.instrument}
                            
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.QTY}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.price}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.commision}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.Fee}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.position}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.AdjCost}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.textColor}` }}
                    >
                      {row.AdjProceed}
                        </TableCell>
                        <TableCell
                      align="left"
                      style={{ color: `${lightTheme.GrossColor}` }}
                    >
                      {row.GrossPL}
                    </TableCell>
             
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'15px',paddingBottom:'15px'}}>
                  <button className="addTradeBtn" style={{backgroundColor:`${lightTheme.headingTextColor}`,color:`${lightTheme.whiteText}`}}>+ TRADE</button>
              </div>
      </Box>
    </div>
  );
};

export default TradeTable;
