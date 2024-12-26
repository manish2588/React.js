import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
function FetchDataPagination() {
  const [page, setPage] = useState(0);
  const fetchData = async (page) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=3`
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchData(page),

    placeholderData: keepPreviousData,
  });
  if (isLoading) return <div>Loading.......</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div>
        <h1>Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
        <div>
          <button
            onClick={() => setPage((prev) => prev - 3)}
            disabled={page === 0 ? true : false}
          >
            {" "}
            Prev
          </button>
          <h1>{page / 3 + 1}</h1>
          <button onClick={() => setPage((prev) => prev + 3)}>Next</button>
        </div>
      </div>
    </>
  );
}

{
  /* const { data, refetch } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  enabled: !!userId, // Fetch only if userId is available
  select: (data) => data.slice(0, 5), // Get the first 5 todos
  retry: 1, // Retry only once on failure
});

Useful Read
 */
}
export default FetchDataPagination;
