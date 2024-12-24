import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchDataPage from "./pages/FetchDataPage";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/fetch",
          element:<FetchDataPage/>
        }
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
