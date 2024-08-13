import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const submitLoginData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Set persistence before signing in
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user && user.uid) {
        console.log("User successfully signed in:", user);
        navigate("/Home");
      } else {
        console.log("User not authenticated");
        navigate("/LoginSignup");
      }
    } catch (error: any) {
      // Display error message
      setError(error.message || "Failed to sign in");
      console.error("Login error:", error);
      navigate("/LoginSignup");
    } finally {
      // Clear input fields
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={submitLoginData}>
      <div className="space-y-5">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="font-medium" htmlFor="email">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
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
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <button type="submit" className="w-full rounded-sm bg-black text-white h-10 font-medium mt-5">
        Sign in
      </button>
    </form>
  );
};

export default Login;
