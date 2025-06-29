import { Route, Routes } from "react-router-dom";
import Post from "../home/postsPlants/Post";
import Home from "../home/Home";
import ListPage from "../components/pages/detailsPage/ListPage";
import Review from "../ui/reviews/Review";
import CartTotals from "../ui/cartTotals/CartTotals";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/list/:id",
      element: <ListPage />,
    },
    {
      link: "/post",
      element: <Post />,
    },
    {
      link: "/review",
      element: <Review />,
    },
    {
      link: "/card/:id",
      element: <CartTotals />,
    },
    {
      link: "/login",
      element: <Login />,
    },
    {
      link: "/register",
      element: <Register />,
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
