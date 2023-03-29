import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { Badge, Avatar, Divider, Popover } from '@mui/material';
import { lightTheme } from '../../../Theme/theme';
import person from '../../../assets/person.png';
import './Notifications.css';

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const style = {
    // position: 'absolute',
    top: '49%',
    left: '72%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '500px',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const notificationMenuStyling = {
    maxWidth: '440px',
    maxHeight: '540px',
  };
  const notificationArray = [1, 2, 3, 4];
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Badge
        aria-describedby={id}
        variant="contained"
        onClick={handleOpen}
        badgeContent={notificationArray.length}
        color="error"
        style={{ paddingLeft: '10px', marginRight: '20px', cursor: 'pointer' }}
      >
        <AiOutlineBell size={20} color="gray" />
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
          style: { maxWidth: 440, minHeight: 140 },
        }}
      >
        <div style={{ notificationMenuStyling }}>
          <p style={{ padding: '10px 15px', color: `${lightTheme.notficationColor}` }}>Notifications</p>
          {notificationArray.map((item, index) => {
            return (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 25px' }}>
                  <Avatar alt="Remy Sharp" srcSet={person} style={{ border: '1px solid #e2e2e2' }} />
                  <div style={{ paddingLeft: '20px', color: `${lightTheme.notficationColor}` }}>
                    <p>Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report</p>
                    <p style={{ fontWeight: '300', color: `${lightTheme.dateColor}`, marginTop: '10px' }}>
                      Yesterday at 5:42 PM
                    </p>
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
      </Popover>
    </div>
  );
};

export default NotificationMenu;
