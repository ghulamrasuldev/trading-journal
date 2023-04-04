import React, { useState } from "react";
import "./Sidebar.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import logo from "../../assets/login/logo.png";
// import { menuItem } from './MenuItem'
import { NavLink } from "react-router-dom";
import { Divider, Tooltip } from "@mui/material";
// import { lightTheme } from '../../Theme/theme'
import settingIcon from "/sidebarImages/setting.png";
import ModeChange from "../../Theme/ChangeMode";

import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";;
import { useAtom } from 'jotai';
import { isOpenAtom } from '../../atom/atom.js';

const Sidebar = ({ children }) => {
  const lightTheme = ModeChange();

  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "./sidebarImages/dashboard.png",
    },
    {
      path: "/dailyStatus",
      name: "Daily Status",
      icon: "./sidebarImages/dailystatus.png",
    },
    {
      path: "/tradelog",
      name: "Trade Log",
      icon: "./sidebarImages/loop.png",
    },
    {
      path: "/performance",
      name: "Performance",
      icon: "./sidebarImages/performance.png",
    },
    {
      path: "/journal",
      name: "Journal",
      icon: "./sidebarImages/edit.png",
    },
    {
      path: "/news",
      name: "News",
      icon: "./sidebarImages/news.png",
    },
  ];

  const linkStyle = {
    "&:hover": {
      backgroundColor: `${lightTheme.hoverColor}`,
    },
    "&:active": {
      backgroundColor: `${lightTheme.activeColor}`,
    },
  };

  const mode =useSelector(state=>state.mode)

  return (
    <div className="container">
      <div
        className="sidebar"
        style={{
          width: isOpen ? "250px" : "70px",
          backgroundColor: lightTheme.ComponentBackgroundColor,
        }}
      >
        {/* Top Section of Sidebar */}

        <div className="topSection">
          <div className="logoSection">
            <img src={logo} alt="logo Image" className="logoImg" style={{backgroundColor:'transparent'}}/>
            <p
              className="name"
              style={{
                display: isOpen ? "block" : "none",
                color: lightTheme.textColor,
              }}
            >
              Journal Trade
            </p>
          </div>
          <div className="openArrow">
           
            {isOpen ? (
              <IoIosArrowDropleftCircle
                size={30}
                onClick={() => setIsOpen(!isOpen)}
                style={{ color: lightTheme.sidebarArrow }}
              />
            ) : (
              <IoIosArrowDroprightCircle
                size={30}
                onClick={() => setIsOpen(!isOpen)}
                style={{ color: lightTheme.sidebarArrow }}
              />
            )}
          </div>
        </div>
        <Divider
          style={{
            width: "100%",
            position: "relative",
            top: "-18px",
            zIndex: "-1",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.03)",
          }}
        />

        {/* Sidebar Navigations */}

        <div className="menuItems">
          {menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className={mode? "darklink":"link"}
                style={{
                  margin: isOpen ? "5px 10px" : "5px 8px",
                  color: lightTheme.textColor,
                }}
              >
                <Tooltip title={item.name} placement="right-start">
                  <div
                    className="icon"
                    style={{ color: lightTheme.sidebarIcon }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="sidebarImages"
                    />
                  </div>
                </Tooltip>
                <div
                  className="link_text"
                  style={{
                    display: isOpen ? "block" : "none",
                    color: lightTheme.textColor,
                  }}
                >
                  {item.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        {/* Sidebar News Section */}
        {isOpen ? (
          <div className="news">
            <NewsCard />
          </div>
        ) : null}

        {/* setting navigation */}
        <div
          className="setting"
          style={{ position: isOpen ? "absolute" : "absolute" }}
        >
          <NavLink
            to="/setting"
            className="link"
            activeclassname="active"
            style={{
              margin: isOpen ? "5px 10px" : "0 5px",
              color: lightTheme.textColor,
            }}
          >
            <Tooltip title="Setting" placement="right-start">
              <div className="icon" style={{ color: lightTheme.sidebarIcon }}>
                <img
                  src={settingIcon}
                  alt="setting"
                  className="sidebarImages"
                />
              </div>
            </Tooltip>
            <div
              className="link_text"
              style={{
                display: isOpen ? "block" : "none",
                color: lightTheme.textColor,
              }}
            >
              Setting
            </div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
