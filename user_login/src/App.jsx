import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Profile from "./component/Profile";
import AdminDashboard from "./component/AdminDashboard";


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<SignUp/>
        },
        {
          path:"profile",
          element:<Profile/>
        },
        {
          path:"dashboard",
          element:<AdminDashboard/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;