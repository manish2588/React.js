export const userLoader = async ({ params }) => {
    const { id } = params; // Get the dynamic `id` from the route parameters
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    return res.json(); // Return the fetched data
  };
  