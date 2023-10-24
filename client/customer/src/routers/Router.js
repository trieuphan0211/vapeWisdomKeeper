import React from "react";
import { useRoutes } from "react-router-dom";
import { FanPage, HomePage, ProjectTeam } from "../pages";
import MainLayout from "../layouts/MainLayout";
const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [
        {
          path: `${context}/`,
          element: <HomePage />,
        },
        {
          path: `${context}/fanpage`,
          element: <FanPage />,
        },
        {
          path: `${context}/project-team`,
          element: <ProjectTeam />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
