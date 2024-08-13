import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../db";
import { doc, setDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false)



  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const Auth = getAuth();
    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
      });

      if (email && password) {
        setSuccess("Signup successful");
        await signOut(auth);
        setLoading(false);
      }

      setPassword("");
      setEmail("");
      setName("");
      setLoading(false);
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="space-y-5">
        <div>
          <p className="text-red-500">{error}</p>
          <p className="text-green-500">{success}</p>
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={name}
            autoComplete="name"
            required
            onChange={(e) => setName(e.target.value)}
            className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="font-medium" htmlFor="email-address">
            Email address
          </label>
          <input
            value={email}
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div>
          <label className="font-medium" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full rounded-sm bg-black text-white h-10 font-medium mt-5"
          >
            {loading ? <p>Loading...</p> : <p>Sign up</p> }
            
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
