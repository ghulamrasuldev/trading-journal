import React from 'react';
import Select from 'react-select';
import { lightTheme } from '../../Theme/theme';

const CustomSelect = ({ options, selectedOption, mode, isMulti, placeholder = '' }) => {
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

  return (
    <>
      <Select
        placeholder={placeholder}
        isMulti={isMulti ? isMulti : false}
        styles={customStyles}
        defaultValue={{
          value: mode,
          label: mode,
        }}
        onChange={(value) => {
          selectedOption.set(value.value);
        }}
        options={options}
      />
    </>
  );
};

export default CustomSelect;
