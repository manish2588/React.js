import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const fetchPosts = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${pageParam}&_limit=10`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
{
  /*
    
    getNextPageParam: (lastPage, allPages) => {
  // If the last page has fewer than 10 items, it indicates there are no more pages to load
  if (lastPage.length < 10) return undefined; // No more pages
  
  // Otherwise, calculate the next page to fetch
  return allPages.length * 10; // Increment by 10 for the _start parameter in the API call
},
*/
}
const InfiniteScroll = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["posts"], // Query key as an array
    queryFn: ({ pageParam }) => fetchPosts({ pageParam }), // Fetch function
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined; // No more pages
      return allPages.length * 10; // Increment by 10 (_start parameter)
    },
  });

  // Using the `inView` hook to detect when the user reaches the bottom of the page
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep triggering until there are no more posts
    threshold: 1.0, // Trigger when the element is fully in view
  });

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage(); // Trigger fetching the next page
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Infinite Scroll with TanStack Query</h1>
      <ul>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div ref={ref} style={{ height: "20px", margin: "10px 0" }} />
      {isFetchingNextPage && <p>Loading more...</p>}
      {!hasNextPage && <p>No more posts to load.</p>}
    </div>
  );
};

export default InfiniteScroll;
