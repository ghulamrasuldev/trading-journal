import React, { useState } from 'react';
import './Filter.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Select from 'react-select';
import { Badge, Divider, Grid, Popover } from '@mui/material';
import navMenu from '../../../assets/navMenu.png';
import SecondaryButton from '../../common/SecondaryButton';
import PrimaryButton from '../../common/PrimaryButton';
import CustomSelect from '../../common/CustomSelect';

const filterBtn = {
  padding: '0!important',
  minWidth: '10px!important',
};
const notificationMenuStyling = {
  maxWidth: '440px',
  maxHeight: '540px',
};
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const symbolOptions = [
  { value: 'Symbol', label: 'Symbol' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const mutualOptionsLeft = [
  { value: 'Open/Closed', label: 'Open/Closed' },
  { value: 'Setups', label: 'Setups' },
  { value: 'Custom', label: 'Custom' },
  { value: 'Open/closed', label: 'Open/Closed' },
];
const mutualOptionsRight = [
  { value: 'Mistake', label: 'Mistake' },
  { value: 'Open/Closed', label: 'Open/Closed' },
  { value: 'Status', label: 'Status' },
  { value: 'Side', label: 'Side' },
];

const Filter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Badge
        aria-describedby={id}
        variant="contained"
        onClick={handleOpen}
        color="error"
        style={{ paddingLeft: '10px', marginRight: '20px', cursor: 'pointer' }}
      >
        <img src={navMenu} alt="menuIcon" height={15} style={{ cursor: 'pointer', marginRight: '20px' }} />
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{
          left: '40px',
          top: '14px',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: { minWidth: 462, minHeight: 447 },
        }}
      >
        <div style={{ notificationMenuStyling }}>
          <div
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <CustomSelect
              className="noFilter"
              placeholder={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <HiOutlineMenuAlt2 size={20} style={{ cursor: 'pointer' }} color="gray" />
                  <p style={{ paddingLeft: '5px', fontSize: '15px' }}>No Filter</p>
                </div>
              }
              options={options}
            />
          </div>
          <div className="allFilters">
            <div>
              <CustomSelect className="symbolFilter" options={symbolOptions} defaultValue={[symbolOptions[0]]} />
            </div>
            <Grid container columnGap={5}>
              <Grid item lg={5}>
                <CustomSelect className="filter" options={mutualOptionsLeft} defaultValue={[mutualOptionsLeft[0]]} />
                <CustomSelect className="filter" options={mutualOptionsLeft} defaultValue={[mutualOptionsLeft[1]]} />
                <CustomSelect className="filter" options={mutualOptionsLeft} defaultValue={[mutualOptionsLeft[2]]} />
                <CustomSelect className="filter" options={mutualOptionsLeft} defaultValue={[mutualOptionsLeft[3]]} />
              </Grid>
              <Grid item lg={5}>
                <CustomSelect className="filter" options={mutualOptionsRight} defaultValue={[mutualOptionsRight[0]]} />
                <CustomSelect className="filter" options={mutualOptionsRight} defaultValue={[mutualOptionsRight[1]]} />
                <CustomSelect className="filter" options={mutualOptionsRight} defaultValue={[mutualOptionsRight[2]]} />
                <CustomSelect className="filter" options={mutualOptionsRight} defaultValue={[mutualOptionsRight[3]]} />
              </Grid>
            </Grid>
            <div
              className="filterBtns"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                columnGap: '20px',
              }}
            >
              <SecondaryButton buttonTitle="Clear Filters" />
              <PrimaryButton buttonTitle="Apply Filters" />
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Filter;
