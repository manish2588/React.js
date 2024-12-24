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
  });
  if (isLoading) return <div>Loading.......</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div>
        <h1>Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchDataPage;
