import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeBanner from "../home/homeBanner/HomeBanner";

const MainRoutes = () => {
  const routes = [
    {
      link: "/home",
      element: <HomeBanner />,
    },
  ];
  return (
    <Routes>
      {routes.map((item, index) => (
        <Route path={item.link} element={item.element} index={index} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
