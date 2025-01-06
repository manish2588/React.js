import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase"; // Import your Firebase configuration
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Reference to the user document in the Firestore collection "Users"
          const userDocRef = doc(db, "Users", user.uid);
          const userDoc = await getDoc(userDocRef); // Fetch the document

          if (userDoc.exists()) {
            setUserData(userDoc.data()); // Set the user data in the state
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user logged in");
        setUserData(null); // Clear user data if no user is logged in
      }
      setLoading(false); // Stop loading after fetching user data
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);
   const handleClick=async ()=>{
    try{
        await auth.signOut();
        console.log("Log Out")
        navigate("/login")
    }catch(error)
    {
        console.log(error.message)
    }

   }
  if (loading) {
    return <p>Loading...</p>; // Show loading state until data is fetched
  }

  if (!userData) {
    return <p>No user data found.</p>; // If no data is found
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-80 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <br/>
      <button onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
