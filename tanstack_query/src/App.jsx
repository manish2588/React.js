import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import About from "./pages/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchDataPage from "./pages/FetchDataPage";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchDataPagination from "./pages/Pagination";
import InfiniteScroll from "./pages/InfiniteScroll";
import InfiniteScrollPosts from "./pages/InfiniteScroll";
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
        ,{
          path:"/scroll",
          element:<InfiniteScrollPosts/>
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
