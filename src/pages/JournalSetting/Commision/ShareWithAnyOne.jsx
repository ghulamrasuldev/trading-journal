import React from 'react';
// import { lightTheme } from '../../../Theme/theme';
import Select from 'react-select';
import { Checkbox, FormControlLabel } from '@mui/material';
import ModeChange from '../../../Theme/ChangeMode';
const ShareWithAnyOne = () => {
  const lightTheme = ModeChange();
  const headerStyling = {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '10px',
    color: `${lightTheme.textColor}`,
  };
  const accordionDataTitle = {
    color: `${lightTheme.textColor}`,
    fontSize: '14px',
    fontWeight: '500',
    margin: '3px 0',
  };
  const divWithBorderBottom = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `2px solid ${lightTheme.badgeBackColorRGBA}`,
    padding: '5px 0px 5px 8px',
  };
  const checkBoxColor = {
    color: `${lightTheme.headingTextColor}`,
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'none',
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? `${lightTheme.headingTextColor}` : 'white',
      color: state.isSelected ? 'white' : `${lightTheme.textColor}`,
      '&:hover': {
        backgroundColor: 'lightgray',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: `${lightTheme.textColor}`,
    }),
  };

  const options = [
    {
      label: 'Ninja Traders',
      value: 'ninjaTraders',
    },
    {
      label: 'Ninja Warriors',
      value: 'ninjaWarriors',
    },
    {
      label: 'Night Fighters',
      value: 'ninjaFighters',
    },
  ];

  return (
    <>
      <h4 style={headerStyling}>Share With Anyone</h4>
      <Select
        styles={customStyles}
        defaultValue={[options[0]]}
        name="traders"
        options={options}
        classNamePrefix="select"
      />
      <div style={divWithBorderBottom}>
        <div>
          <p style={accordionDataTitle}>Stocks</p>
        </div>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
      </div>
      <div style={divWithBorderBottom}>
        <div>
          <p style={accordionDataTitle}>Forex</p>
        </div>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
      </div>
      <div style={divWithBorderBottom}>
        <div>
          <p style={accordionDataTitle}>Future</p>
        </div>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
      </div>
    </>
  );
};

export default ShareWithAnyOne;
