import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Campaign from "../pages/Campaign";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonationDetails from "../pages/DonationDetails";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import ForgetPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/campaign",
    element: <Campaign />,
  },
  {
    path: "/campaign/:id",
    element: <PrivateRoute> <DonationDetails /></PrivateRoute>,
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      },
      {
        path: '/auth/forget-password',
        element: <ForgetPassword />
      }
    ]
  },
  {
    path: '/how-to-help',
    element: <HowToHelp />
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard/update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfile />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Error />
  }
]);

export default router;
