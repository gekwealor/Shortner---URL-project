import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <p>
          go back to Home Page <Link to="/Home">Home</Link>
        </p>
      </p>
    </div>
  );
};

export default ErrorPage;
