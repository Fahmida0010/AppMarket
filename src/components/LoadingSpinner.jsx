import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-24 bg-white rounded-xl shadow-lg">
    <Loader className="w-12 h-12 text-indigo-500 animate-spin" />
    <p className="ml-4 text-xl font-semibold text-gray-600">Loading...</p>
  </div>
);

export default LoadingSpinner;
