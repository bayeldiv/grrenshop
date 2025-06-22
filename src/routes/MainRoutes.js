import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeBanner from "../home/homeBanner/HomeBanner";
import ListPage from "../components/pages/detailsPage/ListPage";
import Post from "../home/postsPlants/Post";

const MainRoutes = () => {
  const routes = [
    {
      link: "/home",
      element: <HomeBanner />,
    },
    {
      link: "/list/:id",
      element: <ListPage />,
    },
    {
      link: "/post",
      element: <Post />,
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
