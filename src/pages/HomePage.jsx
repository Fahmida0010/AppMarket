import React from "react";
import { Play, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import { APP_DATA } from "../data/appData";
import heroImage from "../assets/hero.png";

const HomePage = () => {
  const topApps = APP_DATA.slice(0, 8);
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="space-y-12">
      <div className="bg-indigo-600 py-16 text-center text-white rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold">
          We Build <span className="text-yellow-500">Productive</span> Apps
        </h1>
        <p className="mt-4 text-indigo-100">
          Apps that make life smarter & simpler.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-4">
            <a
              href="https://play.google.com"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center shadow-md hover:shadow-lg transition duration-300"
            >
              <Play className="mr-2" /> Google Play
            </a>
            <a
              href="https://apple.com"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold flex items-center shadow-md hover:shadow-lg transition duration-300"
            >
              <Store className="mr-2" /> App Store
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="phone"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
      <div className="bg-white rounded-xl shadow-xl p-6 sm:p-10 -mt-16 relative z-20 mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg bg-indigo-50 border-t-4 border-indigo-600 shadow-md">
            <p className="text-4xl font-extrabold text-indigo-700">29.6M</p>
            <p className="text-sm text-gray-500 mt-1">Total Downloads</p>
            <p className="text-xs text-green-500 mt-1">31% more than last month</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-pink-50 border-t-4 border-pink-600 shadow-md">
            <p className="text-4xl font-extrabold text-pink-700">906K</p>
            <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
            <p className="text-xs text-green-500 mt-1">48% more than last month</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-teal-50 border-t-4 border-teal-600 shadow-md">
            <p className="text-4xl font-extrabold text-teal-700">132+</p>
            <p className="text-sm text-gray-500 mt-1">Active Apps</p>
            <p className="text-xs text-green-500 mt-1">31 more will launch</p>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Trending Apps</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate('/all-apps')} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Show All Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
