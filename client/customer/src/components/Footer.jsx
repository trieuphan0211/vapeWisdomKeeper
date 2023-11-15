import { Box } from "@mui/material";
import React from "react";
import "../assets/scss/Layout.scss";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import threads from "../assets/img/threads.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";

export const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer_sociaty">
        <a
          className="footer_sociaty-item "
          href="https://www.facebook.com/profile.php?id=61552368797033"
          target="_blank"
          title="Facebook"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="footer_sociaty-item disabled"
          href=""
          target="_blank"
          title="Instagram not action"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="footer_sociaty-item disabled"
          href=""
          target="_blank"
          title="Threads not action"
          rel="noopener noreferrer"
        >
          <img src={threads} alt="" />
        </a>
        <a
          className="footer_sociaty-item disabled"
          href=""
          target="_blank"
          title="Twitter not action"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          className="footer_sociaty-item disabled"
          href=""
          target="_blank"
          title="Youtube not action"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="" />
        </a>
      </Box>
      <Box className="footer_copyright">
        <p>Copyright © {new Date().getFullYear()} TVKW</p>
      </Box>
    </Box>
  );
};
