import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchDataPage from "./pages/FetchDataPage";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchDataPagination from "./pages/Pagination";
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
        ,{
          path:"/pagination",
          element:<FetchDataPagination/>
        }
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
