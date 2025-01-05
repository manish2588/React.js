import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import Login from "./component/Login";
import SignUp from "./component/SignUp";


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
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;