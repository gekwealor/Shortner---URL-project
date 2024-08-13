import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { FaStaylinked } from "react-icons/fa";

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <header className="flex w-full h-screen z-10 bg-black opacity-70 justify-center items-center m-auto space-x-2">
        <div className="w-full m-auto flex justify-center z-20">
          {" "}
          <FaStaylinked color="#f9a826" size={40} />
          <span className="text-xl font-bold text-[#f9a826]">Tiny-Lnk</span>
        </div>
      </header>
    );
  }

  return authenticated ? element : <Navigate to="/LoginSignup" />;
};

export default ProtectedRoute;
