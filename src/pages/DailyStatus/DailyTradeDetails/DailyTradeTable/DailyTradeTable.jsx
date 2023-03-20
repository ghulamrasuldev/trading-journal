import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { lightTheme } from '../../../../Theme/theme';
import './dailyTradeTable.css'


const tableData = [
    {
        id: "1",
        OpenTime: '11:54:36',
        Put: 'Buy',
        Ticker: 'Dow',
        Volume: '13',
        NetPL: "$3,654.34",
        Setup: 'LH Check',
        Notes: './NotesIcon.png',
        NotesLoss: './NotesIcon2.png',
        Tags: 'RSI EMA',
        
    },
    {
        id: "2",
        OpenTime: '11:54:36',
        Put: 'Buy',
        Ticker: 'Dow',
        Volume: '2',
        NetPL: "$3,64.34",
        Setup: 'LH Check',
        Notes: './NotesIcon.png',
        NotesLoss: './NotesIcon2.png',
        Tags: 'RSI EMA',
        
    },
    {
        id: "3",
        OpenTime: '11:54:36',
        Put: 'Buy',
        Ticker: 'Dow',
        Volume: '19',
        NetPL: "$3,34.34",
        Setup: 'LH Check',
        Notes: './NotesIcon.png',
        NotesLoss: './NotesIcon2.png',
        Tags: 'RSI EMA',
        
    },
]



const DailyTradeTable = () => {

  return (
      <div className='tradeTableMain'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>#</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>OpenTime</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Put</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Ticker</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Volume</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Net P&L</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Setup</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Notes</TableCell>
            <TableCell align="left" style={{ fontSize:'13px',fontWeight:'400',color:`${lightTheme.headingColor}` }}>Tags</TableCell>
            <TableCell align="left" ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row,index) => (
            <TableRow
              key={index}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                
            >
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>0{row.id}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.OpenTime}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}><p className={row.Volume<10? 'loss':'profit'} style={row.Volume<10?{backgroundColor:`${lightTheme.loss}`,color:`${lightTheme.whiteText}`}:{backgroundColor:`${lightTheme.profit}`,color:`${lightTheme.whiteText}`}}>{row.Put}</p></TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.Ticker}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.Volume}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.NetPL}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.Setup}</TableCell>
                  <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400' }}>{row.Volume<10?  <img src={row.NotesLoss} alt='noteIcon' height={20}/>: <img src={row.Notes} alt='noteIcon' height={20}/>}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400',color:`${lightTheme.headingTextColor}` }}>{row.Tags}</TableCell>
              <TableCell align="left"   style={{ fontSize:'12px',fontWeight:'400' }}><p className='addBtn' onClick={()=>{console.log('clicked')}} style={{backgroundColor:`${lightTheme.headingTextColor}`,color:`${lightTheme.whiteText}`}}>+</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DailyTradeTable