import { NavLink, useLoaderData } from "react-router-dom";

function About() {
  const userData = useLoaderData();
  // If `userData` is undefined or null, show a loading message
  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <div className="w-full p-2 m-4">
        <h1>Users</h1>
        <ul className="flex flex-col gap-5">
          {userData.map((item) => (
            <li key={item.id}>
              <p>
                User: <NavLink to={`/about/${item.id}`}> {item.name} </NavLink>{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default About;
