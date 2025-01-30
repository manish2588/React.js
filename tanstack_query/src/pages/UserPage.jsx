import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserPage() {
  const { id } = useParams();

  const fetchUserData = async ({ queryKey }) => {
    const [,id] = queryKey // Get the dynamic ID from the queryKey
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['posts', id],  // use an object with queryKey and queryFn
    queryFn: fetchUserData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div><h1>{error.message}</h1></div>;

  return (
    <>
      <h1>User Page</h1>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </>
  );
}

export default UserPage;
