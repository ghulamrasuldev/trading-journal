import React,{useState} from 'react'
import { lightTheme } from '../../../Theme/theme'
import { MdOutlineLock } from "react-icons/md";
import { Box, Divider } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TagBreakDown = () => {
  
  const [applyFllter, setApplyFilter] = useState("0");
  const[AggregateToggle,setAggregateToggle]=useState('0')
  const[tagToggle,setTagToggle]=useState('0')



  const tableData = [
    {
      graph: '11:54:36',
      grossPl: '13',
      count: '13',
      voulme:'15'
    },
  ]

   // styling
 const mainDiv = {
  padding: "25px 15px",
  backgroundColor: `${lightTheme.ComponentBackgroundColor}`,

  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
};

const gridItem = {
  marginTop: "30px",
  border: `1px solid ${lightTheme.borderColor}`,
  backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
  borderRadius: "8px",
}; 

  return (
    <div>
      <Box sx={mainDiv}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Aggregare and per-trade filters button */}
          <div
            
            style={{ backgroundColor: `${lightTheme.performanceButtonsBackground}`, borderRadius:'20px' }}>
            <button className="plBtn" style={
                AggregateToggle == "0"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                  color: `${lightTheme.whiteText}`,
                      borderRadius:'20px'
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setAggregateToggle("0")}>Aggregate P&L</button>
            <button className="plBtn" style={
                AggregateToggle == "1"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                  color: `${lightTheme.whiteText}`,
                  borderRadius:'20px'
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setAggregateToggle("1")}>Per-Trade Average</button>
          </div>
          {/* P & L type filters button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <p
            style={{
              color: `${lightTheme.headingTextColor}`,
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            P&L Type :
          </p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceButtonsBackground}`,
            }}
          >
            <button
              className="plBtn"
              style={
                applyFllter == "0"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter("0")}
            >
              $
            </button>
            <button
              className="plBtn"
              style={
                applyFllter == "1"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter("1")}
            >
              T
            </button>
            <button
              className="plBtn"
              style={
                applyFllter == "2"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                      color: `${lightTheme.whiteText}`,
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setApplyFilter("2")}
            >
              R{" "}
              <MdOutlineLock
                color="red"
                size={10}
                style={
                  applyFllter == "2"
                    ? { color: `${lightTheme.whiteText}` }
                    : { color: `${lightTheme.textColor}` }
                }
              />
            </button>
          </div>
          <a
            href="#"
            style={{
              color: `${lightTheme.linkColor}`,
              textDecoration: "underline",
            }}
          >
            Help
          </a>
        </div>
        </div>
        {/* Tag filter button */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          <p style={{ fontSize: '14px', fontWeight: '400', marginRight: '10px' }}>Select : </p>
          
        <div
            style={{ backgroundColor: `${lightTheme.performanceButtonsBackground}`, borderRadius: '20px' }}>
            <button className="plBtn" style={
                tagToggle == "0"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                  color: `${lightTheme.whiteText}`,
                      borderRadius:'20px'
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setTagToggle("0")}>Individual Tags</button>
            <button className="plBtn" style={
                tagToggle == "1"
                  ? {
                      backgroundColor: `${lightTheme.headingTextColor}`,
                  color: `${lightTheme.whiteText}`,
                  borderRadius:'20px'
                    }
                  : { background: "none", color: `${lightTheme.textColor}` }
              }
              onClick={() => setTagToggle("1")}>Tag Combinations</button>
          </div>
        </div>
        {/* summary and detial div */}
        <div style={{display:'flex',alignItems:'center'}}>
          <p style={{color:`${lightTheme.textColor}`,fontSize:"14px",fontWeight:'400'}}>Show : </p>
          <div style={{display:'flex',alignItems:'center'}}>
            <p style={{color:`${lightTheme.linkColor}`,fontSize:"14px",fontWeight:'400',cursor:'pointer',padding:'0 10px'}}>Summary</p>
            <Divider orientation='vertical' flexItem/>
            <p style={{color:`${lightTheme.linkColor}`,fontSize:"14px",fontWeight:'400',cursor:'pointer',padding:'0 10px'}}>Detailed</p>
          </div>
        </div>
        {/* table div */}
        <div style={{marginTop:'10px'}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:`${lightTheme.textColor}`}}>Tag</TableCell>
            <TableCell align="left" style={{color:`${lightTheme.textColor}`}}>Graph</TableCell>
            <TableCell align="left" style={{color:`${lightTheme.textColor}`}}>Gross P&L</TableCell>
            <TableCell align="left" style={{color:`${lightTheme.textColor}`}}>Count</TableCell>
            <TableCell align="left" style={{color:`${lightTheme.textColor}`}}>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                `0${index}`
              </TableCell>
              <TableCell align="left">{data.graph}</TableCell>
              <TableCell align="left">{data.grossPl}</TableCell>
              <TableCell align="left">{data.count}</TableCell>
              <TableCell align="left">{data.voulme}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </Box>
    </div>
  )
}

export default TagBreakDown