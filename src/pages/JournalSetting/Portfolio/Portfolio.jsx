import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PortfolioData from './PortfolioConstantData';
import delBaskit from '../../../assets/delBaskit.png';
import { Tooltip } from '@mui/material';
import ModeChange from '../../../Theme/ChangeMode';
// import { lightTheme } from '../../../Theme/theme';



const Portfolio = () => {
  const lightTheme = ModeChange();
  // styling
  const tableDataStyling = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '12px',
    fontWeight: '400',
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
  };
  
  const tableHeadingStyling = {
    color: `${lightTheme.tableHeadColor}`,
    fontSize: '12px',
    fontWeight: '400',
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
    borderTop: `1px solid ${lightTheme.tableBorderColor}`,
  };
  
  const divStyle = {
    backgroundColor: `${lightTheme.badgeBackColor}`,
    width: '40px',
    height: '26px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <TableContainer component={Paper} elevation={0} style={{backgroundColor:`${lightTheme.ComponentBackgroundColor}`}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={tableHeadingStyling}>Name</TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              Leverage
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              Value
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              Deposits
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              #Trades
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              %Risk
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              References
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}>
              Adjustments
            </TableCell>
            <TableCell align="left" style={tableHeadingStyling}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PortfolioData.map((val) => {
            return (
              <TableRow key={val.id}  sx={{
                "& td": {
                  borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
                },
              }}>
                <TableCell component="th" scope="row" style={tableDataStyling}>
                  {val.name}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  {val.leverage}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  ${val.value}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  ${val.deposits}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  {val.trades}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  {val.risk}
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  <div style={divStyle}>{val.references}</div>
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  <div style={divStyle}> {val.adjustments}</div>
                </TableCell>
                <TableCell align="left" style={tableDataStyling}>
                  <Tooltip title="delete record">
                    <div className="icon" style={{ color: lightTheme.sidebarIcon }}>
                      <img src={delBaskit} alt="delete" height={15} style={{ cursor: 'pointer' }} />
                    </div>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Portfolio;
