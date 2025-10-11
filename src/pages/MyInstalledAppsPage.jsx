import React, { useMemo } from "react";
import { Info } from "lucide-react";
import { APP_DATA } from "../data/appData";
import AppCard from "../components/AppCard";
import { useNavigate } from "react-router-dom";

const MyInstalledAppsPage = ({ installedApps, uninstallApp }) => {
  const navigate = useNavigate();

  const installedAppObjects = useMemo(() => {
    const installed = installedApps
      .map(id => APP_DATA.find(app => app.id === id))
      .filter(Boolean);
    return installed;
  }, [installedApps]);

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900">Installed Apps</h1>
        <p className="text-lg text-gray-500 mt-2 max-w-2xl mx-auto">
          Manage the applications you have installed from Hero.IO
        </p>
      </div>

      {installedAppObjects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow-md">
          <Info className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-700 mb-2">No Installed Apps Found</h3>
          <p className="text-gray-500">
            Visit the <strong>Apps</strong> page to install new applications.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {installedAppObjects.map((app) => {
            const uninstallButton = (
              <button
                onClick={() => uninstallApp(app.id)}
                className="w-full py-2 text-sm font-bold rounded-lg text-white bg-red-500 hover:bg-red-600 transition duration-300 shadow-md"
              >
                Uninstall
              </button>
            );

            return (
              <AppCard
                key={app.id}
                app={app}
                onDetailsClick={() => goToDetails(app.id)}
                actionButton={uninstallButton}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyInstalledAppsPage;
