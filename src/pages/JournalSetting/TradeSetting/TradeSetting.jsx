import React,{useState} from "react";
import { Box, Checkbox, Divider, FormControlLabel } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MyCurrencyPicker from './currencySelect'
import { lightTheme } from "../../../Theme/theme";
import Select from 'react-select' 
import "./TradeSetting.css";

const TradeSetting = () => {


  const [expanded, setExpanded] =useState(false);
  const [selectedCurrecny,setSelectedCurrecny]=useState('united state')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  //  currecny Data
  const currency = [
    {value:'USD',label:'USD'},
    {value:'GBP',label:'UK'},
    {value:'Euro',label:'EU'},
    {value:'Dhiram',label:'UAE'},
    {value:'PKR',label:'PK'},
    {value:'INR',label:'IN'},
  ]

  // styling

  const mainDiv = {
    // background: `${lightTheme.ComponentBackgroundColor}`,
    // padding: "10px 10px",
    borderRadius: "8px",
    // width: "70%",
  };

  const accordianStyle = {
    // margin: "30px 0",
    marginBottom:'30px',
    "&:before": {
      display: "none",
    },
  };

  const accordianDetail = {
    padding: "0",
    borderBottom: "none",
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: "0px 0px 8px 8px",
  };

  const checkBoxColor = {
    color: `${lightTheme.headingTextColor}`,
  };

  const divWithBorderBottom = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `2px solid ${lightTheme.borderColor}`,
    padding: "15px 15px",
  }
  const divWithoutBorderBottom = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
  }

  const accordianTitle = {
    color: `${lightTheme.headingTextColor}`,
                fontSize: "16px",
                fontWeight: "500",
  }

  const accordianDataTitle = {
    color: `${lightTheme.textColor}`,
    fontSize: "14px",
    fontWeight: "500",
    margin: "3px 0",
  }

  const accordianDataPara = {
    color: `${lightTheme.textColor}`,
                    fontSize: "12px",
                    fontWeight: "400",
  }

  const selectStyle = {
    padding: '5px 10px',
    // border:'none'
    width:'10%'
  }

  const selectDiv = {
    border: `1px solid ${lightTheme.borderColor}`,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    Width: '100%',
    borderRadius: '8px',
  }

  const selectedCurrecnyStyle = {
    fontSize: '12px',
    fontWeight: '400',
    color: `${lightTheme.textColor}`,
    marginLeft:'15px'
  }

  const selectOptionStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: `${lightTheme.textColor}`,
    // ':hover': {
    //   backgroundColor:`${lightTheme.headingTextColor}`,
    // }
  }

  return (
    <div>
      <Box sx={mainDiv}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={accordianStyle}
          elevation={0}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <p
             style={accordianTitle}
            >
              Trade Grouping
            </p>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Normal
                </p>

                <p
                  style={accordianDataPara }
                >
                  Group executions by the instrument when falling within a
                  certain period of time.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                 style={accordianDataTitle}
                >
                  Split when possible
                </p>

                <p
                 style={accordianDataPara}
                >
                  Group executions by instrument, spread and closes trades when
                  reaching a flat position.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Spread
                </p>

                <p
                 style={accordianDataPara}
                >
                  Group executions by instrument and spread when falling within
                  a certain period of time. Closes trades when reaching a flat
                  position.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
                style={accordianTitle}
              >
                Trade Grouping
              </p>
              <p
                style={accordianDataPara}
              >
                Select close date if you want reports to be generated by the
                closing date of the trade.
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Normal
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                 style={accordianDataTitle}
                >
                  Split when possible
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                 style={accordianDataTitle}
                >
                  Spread
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
                style={accordianTitle}
              >
                Include Market Replay Stats
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                 style={accordianDataTitle}
                >
                  Include Market Replay Stats
                </p>
                <p
                  style={accordianDataPara}
                >
                  Include trades placed on Market Replay on your dashboard stats
                  by default.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
               style={accordianTitle}
              >
                Commission
              </p>
              <p
                style={accordianDataPara}
              >
                Select how to calculate profit aim
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Split when possible
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
               style={accordianTitle}
              >
                Profit Aim
              </p>
              <p
                style={accordianDataPara}
              >
                Select how to calculate profit aim
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Avg Entry Price
                </p>

                <p
                style={accordianDataPara}
                >
                  Profit aim will be calculated using the average entry price
                  and the size of the trade
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  First entry Price
                </p>

                <p
                  style={accordianDataPara}
                >
                  Profit aim will be calculated using the very first order entry
                  price and the size of the trade.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
                style={accordianTitle}
              >
                Risk
              </p>
              <p
                style={accordianDataPara}
              >
                Select how to calculate risk
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Avg Entry Price
                </p>

                <p
                  style={accordianDataPara}
                >
                  Risk will be calculated using the average entry price and the
                  size of the trade
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  First entry Price
                </p>

                <p
                  style={accordianDataPara}
                >
                  Risk will be calculated using the very first order entry price
                  and the size of the trade
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
               style={accordianTitle}
              >
                Currency Settings
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithBorderBottom}
            >
              <div style={{width:'100%'}}>
                <p
                 style={accordianDataTitle}
                >
                  Select the default Currency
                </p>

                <p
                >
                  {/* <Select options={currency} placeholder="Select Currency" style={{width:'300px'}} />
                   */}
                  <div style={selectDiv}>
                    <select name='currency' onChange={(e)=>{setSelectedCurrecny(e.target.value)}} style={selectStyle}>
                      {
                        currency.map((currency, index) => {
                          return (
                            <option value={currency.value} style={selectOptionStyle} >{currency.label}</option>
                          )
                        })
                      }
                    </select>
                    <Divider orientation="vertical" flexItem  />
                    <p style={selectedCurrecnyStyle}>{selectedCurrecny}</p>
                  </div>

                </p>
              </div>
            </div>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Assume broker is sending execution prices at base currency?
                </p>

                <p
                  style={accordianDataPara}
                >
                  Check this want us assume broker is sending wxcution price at
                  selected base currency
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox /*checked={allChecked? true: false}*/
                    size="medium"
                    style={checkBoxColor}
                  />
                }
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
          sx={accordianStyle}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{
              background: `${lightTheme.PageBackgroundColor}`,
              borderRadius: "8px 8px 0px 0px",
            }}
          >
            <div>
              <p
                style={accordianTitle}
              >
                Include Market Replay Stats
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={accordianDetail}>
            <div
              style={divWithoutBorderBottom}
            >
              <div>
                <p
                  style={accordianDataTitle}
                >
                  Create custom categories to track as tags. These categories
                  will work in the same way how setup and mistakes works. These
                  will appear on your trade detail where you can choose
                </p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default TradeSetting;
