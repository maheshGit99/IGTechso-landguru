import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../home/HomeLayout";
import Home from "../pages/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
