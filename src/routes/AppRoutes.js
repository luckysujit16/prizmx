import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "../Home/Index";
import E404 from "../E404";
import Register from "../Frontend/pages/Register";
import Verify from "../Frontend/pages/Verify";
import Login from "../Frontend/pages/Login";
import Dashboard from "../Users/pages/Dashboard";
import Wallet from "../Users/pages/Wallet";
import Profile from "../Users/pages/Profile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Index />,
  },
  {
    path: "*",
    element: <E404 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <PrivateRoutes />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/user/transactions",
        element: <Wallet />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

// console.log("AppRouter rendered in App.jsx");
export default AppRouter;
