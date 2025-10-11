import React from "react";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20 bg-white rounded-xl shadow-md mt-12">
      <XCircle className="w-20 h-20 text-red-600 mx-auto mb-6" />
      <h3 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h3>
      <p className="text-lg text-gray-600 mb-8">
        Looks like you've navigated to an invalid path. The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;

