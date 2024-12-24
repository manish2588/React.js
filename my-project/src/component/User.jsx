import { useLoaderData } from "react-router-dom";

function User() {
  const userData = useLoaderData(); // Get the data from the loader
  console.log(userData)
  return (
    <>
      <h1>Hello User</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default User;
