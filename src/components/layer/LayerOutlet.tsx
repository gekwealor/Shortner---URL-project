import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";
import { auth } from "../db";
const layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col min-h-screen">
        <div className={isAuthenticated ? "flex" : "hidden"}>
          <Nav />
        </div>
        <main className="flex-grow">
          <Outlet />
        </main>
        <div className={isAuthenticated ? "block" : "hidden"}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
