import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../db";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await signOut(auth);

      navigate("/LoginSignup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p onClick={() => handleSignout()}>Signout</p>
    </div>
  );
};

export default Signout;
