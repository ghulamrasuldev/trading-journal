import React, { useState } from "react";
import "./Filter.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Select from "react-select";
import { Divider, Grid } from "@mui/material";
import navMenu from '../../../assets/navMenu.png'

const style = {
  position: "absolute",
  top: "49%",
  left: "68%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 450,
  // overflow:'scroll',
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  //   padding:'20px'
};

const filterBtn = {
  // border: '1px solid black',
  padding: "0!important",
  minWidth: "10px!important",
  // marginLeft:'10px'
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <Button onClick={handleOpen} sx={filterBtn}>
        <img src={navMenu} alt="menuIcon" height={15} style={{cursor:'pointer',marginRight:'20px'}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="filterBox">
          <div
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="noFilter"
              placeholder={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <HiOutlineMenuAlt2
                    size={20}
                    style={{ cursor: "pointer" }}
                    color="gray"
                  />
                  <p style={{ paddingLeft: "5px", fontSize: "15px" }}>
                    No Filter
                  </p>
                </div>
              }
              isSearchable={false}
            />
          </div>
                  <div className="allFilters">
                      <Grid container columnGap={5} >
                          <Grid item lg={5}>
                              <Select className="filter" placeholder="Setups"/>
                              <Select className="filter" placeholder="Open/Closed"/>
                              <Select className="filter" placeholder="Custom"/>
                          </Grid>
                          <Grid item lg={5}>
                          <Select className="filter" placeholder="Status"/>
                              <Select className="filter" placeholder="Open/Closed"/>
                              <Select className="filter" placeholder="Side"/>
                          </Grid>
                      </Grid>
                      <div>
                          <Select className="symbolFilter" placeholder="Symbol"/>
                      </div>
                      <div className="filterBtns">
                          <button className="clearFilter">Clear Filters</button>
                          <button className="applyFilter">Apply Filters</button>
                          </div>
                      </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Filter;
