import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/Layout.css";
import logo from "../assets/img/Logo.png";

import Box from "@mui/material/Box";
import { List, ListItemText } from "@mui/material";

const context = "";

export const Header = () => {
  return (
    <Box className="header d-flex align-items-center justify-content-between">
      <Link className="header_logo d-flex">
        <img className="" src={logo} alt="Logo" />
        <p>The Vapes Wiskdom Keeper</p>
      </Link>
      <List className="header_menu d-flex">
        <Link className="header_menu-item" to={`${context}`}>
          <ListItemText primary="Home" />
        </Link>
        <Link className="header_menu-item" to={`${context}/project-team`}>
          <ListItemText primary="Project" />
        </Link>
        <Link className="header_menu-item" to={`${context}/blog`}>
          <ListItemText primary="Blog" />
        </Link>
      </List>
    </Box>
  );
};
