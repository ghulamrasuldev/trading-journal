import React, { useState } from 'react';
import './TradeReport.css';
import { Box, Divider, Grid } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from 'react-select';
import menuDotIcon from '../../../assets/menuDotIcon.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { lightTheme } from '../../../Theme/theme';
import { TradeReportData } from '../TradeTableData.js';

import ModeChange from '../../../Theme/ChangeMode';
import PrimaryButton from '../../../components/common/PrimaryButton';
import SecondaryButton from '../../../components/common/SecondaryButton';
import CustomSelect from '../../../components/common/CustomSelect';

const TradeReport = () => {
  const lightTheme = ModeChange();

  const [toggle, setToggle] = useState(true);
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [filteredTradeReportData, setFilteredTradeReportData] = useState(TradeReportData);
  const [allChecked, setAllChecked] = useState(false);

  // dataLabels for checkbox
  const CheckboxData = [
    'Account Name',
    'Adjusted Cost',
    'Adjusted Proceeds',
    'Average Entry',
    'Close Date',
    'Close Time',
    'Commissions',
    'Custom Tags',
    'Entry Price',
    'Executions',
    'Duration',
    'Average Exit',
  ];

  // filter table on selected checkbox
  // const filterTable = () => {
  //   const filterValues = localStorage.getItem('checkboxValue')
  //   setFilteredTradeReportData(prev => {
  //     return [...prev.filter(val=>val!==filterValues)]
  //   })
  //   console.log('filterValues',filteredTradeReportData)
  // }

  // handle CheckBox
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckBoxValue((prev) => [...prev, value]);
    } else {
      setCheckBoxValue((prev) => {
        return [...prev.filter((val) => val !== value)];
      });
    }
    // setCheckBoxValue([...checkBoxValue, data])
    // console.log(e.target.checked)
    localStorage.setItem('checkboxValue', checkBoxValue);
    // console.log(localStorage.getItem('checkboxValue'));

    // console.log('label',data)
  };

  // styling
  const TradeReportMain = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.02)',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
    width: '90vw',
  };

  const selectText = {
    fontWeight: '500',
    fontSize: '20px',
    padding: '5px 20px',
    paddingTop: '10px',
    color: `${lightTheme.lightDarkBlue}`,
  };
  const noneDefault = {
    padding: '0 10px',
    color: '#022658',
    fontWeight: '700',
    cursor: 'pointer',
    color: `${lightTheme.lightDarkBlue}`,
    // color:'red'
  };
  const tableHead = {
    color: `${lightTheme.headingTextColor}`,
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
  };
  const tableData = {
    color: `${lightTheme.textColor}`,
    borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
  };
  const checkBoxLabel = {
    color: `${lightTheme.textColor}`,
    fontSize: '15px',
    fontWeight: '500',
  };
  const options=[
    {
    label:'option1',value:'value1'
    },
    {
    label:'option2',value:'value2'
    },
  ]
  return (
    <div style={TradeReportMain}>
      <div className="topDivTradeReprot">
        <div>
          <p
            style={{
              fontWeight: '700',
              fontSize: '15px',
              color: `${lightTheme.headingTextColor}`,
            }}
          >
            Your Trades Report
          </p>
        </div>
        <div className="tradeReportSelectDiv">
          <CustomSelect placeholder="Bulk Action" isSearchable={false} options={options} />
          <img
            src={menuDotIcon}
            alt="menuIcon"
            height={30}
            onClick={() => setToggle(!toggle)}
            style={{ cursor: 'pointer',margin:'0 10px' }}
          />
        </div>
      </div>
      <Divider />
      <div >
        {toggle ? (
          <div className="tradeReportTable">
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
              }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={tableHead}>
                      Ticker
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Setups
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Net P%L
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      OpenTime
                      <br />
                      <span>(US/Eastern)</span>
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Average_Entry
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Average_Exit
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      CloseTime
                      <br />
                      (US/Eastern)
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Duration
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Adjusted_Cost
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Side
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Gross P&L
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Volume
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      R_Multiple
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Initial_Target
                    </TableCell>
                    <TableCell align="center" style={tableHead}>
                      Instrument_Type
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredTradeReportData.map((row, index) => (
                    <TableRow
                      key={index}
                      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{
                        borderBottom: `1px solid ${lightTheme.tableBorderColor}`,
                      }}
                    >
                      <TableCell component="th" scope="row" style={tableData}>
                        {row.ticker}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        <p
                          className="TradeReportSetup"
                          style={{
                            color: `${lightTheme.whiteText}`,
                            backgroundColor: `${lightTheme.lightDarkBlue}`,
                          }}
                        >
                          {row.setups}
                        </p>
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.NetPL}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.openTime}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.avgEntry}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.avgExit}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.closeTime}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.duration}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.adjCost}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.side}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.grossPL}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.volume}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.rMultiple}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.initialTarget}
                      </TableCell>
                      <TableCell align="right" style={tableData}>
                        {row.instrumentType}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className="tradeReportCheckBox">
            <p style={selectText}>Select Columns</p>
            <p
              style={{
                fontWeight: '500',
                color: `${lightTheme.textColor}`,
                padding: '0 20px',
              }}
            >
              Choose the columns you want to display in the table
            </p>
            <div className="selectCheckBox">
              <p
                style={{
                  padding: '0 5px',
                  color: `${lightTheme.textColor}`,
                  fontWeight: '700',
                }}
              >
                Select
              </p>

              <p style={noneDefault} onClick={() => setAllChecked(true)}>
                All
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault} onClick={() => setAllChecked(false)}>
                None
              </p>
              <Divider flexItem orientation="vertical" />
              <p style={noneDefault}>Default</p>
            </div>
            <div>
              <Grid container>
                {[1, 2, 3].map((item, index) => {
                  return (
                    <Grid item lg={3} pl={5} pb={5} pt={5} key={item}>
                      <FormGroup>
                        {CheckboxData.map((data, index) => {
                          return (
                            <div key={index}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    /*checked={allChecked? true: false}*/ value={data}
                                    size="medium"
                                    onChange={(e) => handleCheck(e)}
                                  />
                                }
                                label={<p style={checkBoxLabel}>{data}</p>}
                              />
                            </div>
                          );
                        })}
                      </FormGroup>
                    </Grid>
                  );
                })}
                <Grid item lg={3} pl={5} pb={5} pt={5}>
                  <FormGroup>
                    {CheckboxData.slice(0, 5).map((data, index) => {
                      return (
                        <div key={index}>
                          <FormControlLabel
                            control={<Checkbox value={data} size="medium" onChange={(e) => handleCheck(e)} />}
                            label={<p style={checkBoxLabel}>{data}</p>}
                          />
                        </div>
                      );
                    })}
                  </FormGroup>
                </Grid>
              </Grid>
              <div className="checkBoxBtns" style={{ display: 'flex', justifyContent: 'end', columnGap: '10px' }}>
                <SecondaryButton buttonTitle={'Cancel'} />
                <PrimaryButton
                  buttonTitle={'Save'}
                  onClick={() => {
                    filterTable();
                    setToggle(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeReport;
