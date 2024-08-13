import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex text-black flex-col gap-2 sm:flex-row w-full shrink-0 items-center px-4 md:px-6 border-t md:py-10 py-6">
        <p className="text-md text-center font-medium text-muted-foreground">
          &copy; 2024 URL Shortener. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-md font-medium hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="text-md font-medium hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
