import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "../routes/PrivateRouter";
import Index from "../Home/Index";
import E404 from "../E404";
import Register from "../Frontend/pages/Register";
import Verify from "../Frontend/pages/Verify";
import Login from "../Frontend/pages/Login";

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
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

// console.log("AppRouter rendered in App.jsx");
export default AppRouter;
