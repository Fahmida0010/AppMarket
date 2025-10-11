import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { XCircle, ArrowLeft, Star, Download, Activity } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { APP_DATA, CHART_DATA, formatCount } from "../data/appData";

const AppDetailsPage = ({ installedApps, installApp, uninstallApp }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const appId = parseInt(id);

  const app = useMemo(() => APP_DATA.find((a) => a.id === appId), [appId]);
  const isInstalled = installedApps.includes(appId);

  const handleButtonClick = () => {
    if (!isInstalled) installApp(app.id);
  };

  if (!app) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-md mt-12">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-800 mb-2">App Not Found</h3>
        <p className="text-gray-500">
          The requested application ID ({appId}) is invalid or does not exist in our directory.
        </p>
        <button
          onClick={() => navigate("/apps")}
          className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Apps
        </button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <button
        onClick={() => navigate("/apps")}
        className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-200 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to All Apps
      </button>

      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-200">
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <div
              className={`w-28 h-28 sm:w-40 sm:h-40 bg-${app.color}-100 rounded-3xl flex items-center justify-center text-7xl shadow-xl`}
            >
              {app.icon}
            </div>
          </div>

          <div className="flex-grow">
            <h1 className="text-4xl font-extrabold text-gray-900">{app.title}</h1>
            <p className="text-xl text-gray-500 mt-1">{app.companyName}</p>

            <div className="flex flex-wrap items-center mt-4 space-x-6">
              <div className="flex items-center text-yellow-500 font-bold text-lg">
                <Star className="mr-1 w-5 h-5" fill="currentColor" />
                {app.ratingAvg.toFixed(1)} Rating
              </div>
              <div className="flex items-center text-gray-600 font-medium text-lg">
                <Download className="mr-1 w-5 h-5" />
                {formatCount(app.downloads)} Downloads
              </div>
              <div className="flex items-center text-gray-600 font-medium text-lg">
                <Activity className="mr-1 w-5 h-5" />
                {formatCount(app.reviews)} Reviews
              </div>
            </div>

            <div>
              <button
                onClick={handleButtonClick}
                className={`mt-6 w-full sm:w-auto px-10 py-3 text-lg font-bold rounded-full transition duration-300 shadow-lg 
                  ${isInstalled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}
                `}
              >
                {isInstalled ? "Installed" : "Install App"}
              </button>

              {isInstalled && (
                <button
                  onClick={() => uninstallApp(app.id)}
                  className="mt-4 sm:mt-6 sm:ml-4 w-full sm:w-auto px-6 py-2 text-sm font-semibold rounded-full text-red-600 border border-red-600 hover:bg-red-50 transition duration-300"
                >
                  Uninstall
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
            App Review Chart (Monthly Average)
          </h2>
          <div className="h-64 sm:h-80 w-full bg-gray-50 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#4b5563" />
                <YAxis domain={[3.5, 5]} tickFormatter={(v) => v.toFixed(1)} stroke="#4b5563" />
                <Tooltip />
                <Bar dataKey="rating" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Full Description</h2>
          <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-gray-700 leading-relaxed text-lg">{app.description}</p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 border-t pt-4">
              <p>
                <strong>Version:</strong> 3.2.1
              </p>
              <p>
                <strong>Size:</strong> {app.size} MB
              </p>
              <p>
                <strong>Released:</strong> 2024-08-15
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {app.companyName.includes("Game") ? "Gaming" : "Productivity"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
