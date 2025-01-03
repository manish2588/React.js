import axios from "axios";
import { useQuery } from "@tanstack/react-query";
function FetchDataPage() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 5000, // it means till 5 sec no request is go to server to fetch data
    // the cache data is used to render the content which is fetch during latest render
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
export default FetchDataPage;
