import { Route, Routes } from "react-router-dom";
import Post from "../home/postsPlants/Post";
import Home from "../home/Home";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    // {
    //   link: "/list/:id",
    //   element: <ListPage />,
    // },
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
