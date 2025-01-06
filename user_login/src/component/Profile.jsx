import React, { useEffect, useState } from "react";
import { auth, db, googleProvider } from "./firebase"; // Import Firebase configuration and Google provider
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth"; // Import sign-in method for Google

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          if (user.providerData[0]?.providerId === "google.com") {
            // If the user signed in with Google, fetch data from Firebase Auth directly
            setUserData({
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            });
          } else {
            // If the user signed in via email/password, fetch data from Firestore
            const userDocRef = doc(db, "Users", user.uid);
            const userDoc = await getDoc(userDocRef); // Fetch the document

            if (userDoc.exists()) {
              setUserData(userDoc.data()); // Set user data from Firestore
            } else {
              console.log("No such document!");
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user logged in");
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const handleClick = async () => {
    try {
      await auth.signOut();
      console.log("Logged out");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  if (!userData) {
    return <p>No user data found.</p>; // If no user data exists
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-80 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {userData.photoURL && (
        <img
          src={userData.photoURL}
          alt="Profile"
          className="w-16 h-16 rounded-full mb-4"
        />
      )}
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <br />
      <button
        onClick={handleClick}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
