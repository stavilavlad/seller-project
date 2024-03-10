import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorSvg from "../assets/undraw-error.svg";
// client\public\undraw_qa_engineers_dg-5-p.svg

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
      <main className="grid min-h-[100vh]  place-items-center px-8">
        <div className="text-center">
          <img src={errorSvg} className=" w-80"></img>
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-lg leading-7">Sorry, we couldn't find the page you're looking for.</p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Home Page
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh]  place-items-center px-8">
      <img src={errorSvg} className=" w-80"></img>
      <h4 className="text-center font-bold text-4xl"> There Was An Error...</h4>
      <p className="text-center  pt-4 capitalize">
        Might need to log in again if Auth Token expired
        <Link to="/login" className="link link-primary  pl-4">
          Log in
        </Link>
      </p>
    </main>
  );
};

export default Error;
