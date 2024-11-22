import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Campaign from "../pages/Campaign";
import DonationDetails from "../pages/DonationDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import UpdateProfile from "../pages/UpdateProfile";
import Error from "../pages/Error";
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <DonationDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/how-to-help",
        element: <HowToHelp />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/update-profile",
            element: (
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            ),
          },
        ],
      }
    ]
       
    
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
