import React from 'react';
// import { lightTheme } from '../../../Theme/theme';
import Select, { components } from 'react-select';
import { Checkbox, FormControlLabel } from '@mui/material';
import IndicatorUpDown from '../../../assets/IndicatorUpDown.png';

import InputFieldDoubleButtons from '../../../components/common/InputFieldDoubleButtons';
import ModeChange from '../../../Theme/ChangeMode';

const ApplyCommission = () => {
  const lightTheme = ModeChange();
  const headerStyling = {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '10px',
    marginTop: '10px',
    color: `${lightTheme.textColor}`,
  };
  const paraStyling = {
    fontSize: '13px',
    fontWeight: 400,
    marginBottom: '10px',
    color: `${lightTheme.textColor}`,
  };
  const accordionDataTitle = {
    color: `${lightTheme.textColor}`,
    fontSize: '15px',
    fontWeight: '400',
    margin: '3px 0',
  };
  const checkAndPara = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1px 0px 1px 0px',
  };
  const checkBoxColor = {
    color: `${lightTheme.headingTextColor}`,
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? provided.border : provided.border,
      boxShadow: 'none',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      marginRight: '10px',
      height: '15px',
      color: 'black',
      backgroundImage: `url(${IndicatorUpDown})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
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
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={IndicatorUpDown} alt="Custom Icon" />
      </components.DropdownIndicator>
    );
  };
  const options = [
    {
      label: '-- Select apply commission per --',
      value: 'select',
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
      <h4 style={headerStyling}>How To Apply Commission</h4>
      <Select
        styles={customStyles}
        defaultValue={[options[0]]}
        name="traders"
        options={options}
        // classNamePrefix="select"
        components={{ DropdownIndicator }}
      />
      <h4 style={headerStyling}>How To Apply Commission</h4>
      <p style={paraStyling}>
        Set Our default commission value that will be applied to any portfolio that is not specifically defined below.
        Leave it blank if you do not want to have a default value.
      </p>
      <InputFieldDoubleButtons
        placeholder="0"
        showLeftButton={true}
        showRightButton={true}
        leftButtonTitle="$"
        rightButtonTitle="%"
      />
      <div style={checkAndPara}>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
        <p style={accordionDataTitle}>
          Do you want to apply this commission to shares you sell and shares you buy within the same trades?
        </p>
      </div>
      <div style={checkAndPara}>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
        <p style={accordionDataTitle}>Apply only for first and last order</p>
      </div>
      <div style={checkAndPara}>
        <FormControlLabel
          control={<Checkbox /*checked={allChecked? true: false}*/ size="medium" style={checkBoxColor} />}
        />
        <p style={accordionDataTitle}>Force this values over the ones included in the imported files</p>
      </div>
    </>
  );
};

export default ApplyCommission;
