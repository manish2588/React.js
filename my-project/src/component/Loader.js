export async function Loader() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await res.json();
    console.log(data); // Logs the fetched data
    return data; // Directly return the array
  }
  