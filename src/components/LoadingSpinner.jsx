import React from "react";
import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex items-center gap-4">
        <Loader className="w-12 h-12 text-indigo-500 animate-spin" />
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;