import Movies from "@/components/movies/Movies";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";
import Layout from "@/pages/layout/Layout";
import { useRoutes } from "react-router-dom";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "lastest",
      element: <Latest />,
    },
  ]);
};

export default Router;
