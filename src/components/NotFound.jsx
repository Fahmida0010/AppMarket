import React from "react";
import { Link } from "react-router";
import NotFound from "../assets/App-Error.png"


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <img
        src={NotFound}
        alt="Page Not Found"
        className="w-80 md:w-96 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;