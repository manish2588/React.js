import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import AppLayout from "./component/AppLayout";
import Error from "./component/Error";
import { Loader } from "./component/Loader";
import User from "./component/User";
import { userLoader } from "./component/UserLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          loader: Loader
        },
        {
          path:"/about/:id",
          element:<User/>,
          loader:userLoader

        },

        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
