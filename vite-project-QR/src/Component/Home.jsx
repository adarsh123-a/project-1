// pages/Home.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={() => auth.signOut().then(() => navigate("/login"))}>
        Logout
      </button>
    </div>
  );
};

export default Home;
