import React from "react";
import "../assets/scss/ProjectPage.scss";
import { Box } from "@mui/material";
import background from "../assets/img/project/background.jpg";

export const ProjectTeam = () => {
  return (
    <Box className="project">
      <Box className="project_background">
        <img
          className="project_background-img"
          src={background}
          alt="background"
        />
        <p></p>
      </Box>
    </Box>
  );
};
