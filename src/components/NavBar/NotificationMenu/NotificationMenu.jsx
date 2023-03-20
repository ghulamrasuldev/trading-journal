import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlineBell } from "react-icons/ai";
import { Badge, Avatar, Divider } from "@mui/material";
import {lightTheme} from '../../../Theme/theme'
import person from "../../../assets/person.png";
import './Notifications.css'

const NotificationMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "49%",
    left: "72%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 450,
    overflow:'scroll',
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
   
  };

  const notificationBtn = {
    padding:'0!important',
    minWidth:'10px!important'
  }
  
  const notificationArray=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <Button onClick={handleOpen} sx={notificationBtn}>
        <Badge
          badgeContent={notificationArray.length}
          color="error"
          style={{ paddingLeft: "10px", marginRight: "5px", cursor: "pointer" }}
        >
          <AiOutlineBell size={20} color="gray" onClick={() => openModal()} />
        </Badge>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='notificationBox'>
          <p style={{ padding:'10px 15px',color:`${lightTheme.notficationColor}`}}>Notifications</p>
          {
            notificationArray.map((item, index) => {
              return (
                <div>
                <div style={{ display: "flex", justifyContent: "space-between",padding:'15px 25px' }}>
                  <Avatar
                    alt="Remy Sharp"
                    srcSet={person}
                    style={{ border: "1px solid #e2e2e2" }}
                  />
                  <div  style={{ paddingLeft: "20px",color:`${lightTheme.notficationColor}` }}>
                    <p>
                      Ray Arnold left 6 comments on Isla Nublar SOC2 compliance
                      report
                    </p >
                    <p style={{fontWeight:"300",color:`${lightTheme.dateColor}`,marginTop:'10px'}}>Yesterday at 5:42 PM</p>
                  </div>
                </div>
                <Divider />
              </div>
              )
            })
          }
        
          {/* <div >
            <div style={{ display: "flex", justifyContent: "space-between",padding:'15px 25px' }}>
              <Avatar
                alt="Remy Sharp"
                srcSet={person}
                style={{ border: "1px solid #e2e2e2" }}
              />
              <div  style={{ paddingLeft: "20px" }}>
                <p>
                  Ray Arnold left 6 comments on Isla Nublar SOC2 compliance
                  report
                </p >
                <p style={{fontWeight:"300",color:'#A5ACB8',marginTop:'10px'}}>Yesterday at 5:42 PM</p>
              </div>
            </div>
          </div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default NotificationMenu;
