
import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import HomePage from "./pages/HomePage";
import AllAppsPage from "./pages/AllAppsPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import MyInstalledAppsPage from "./pages/MyInstalledAppsPage";
import ErrorPage from "./pages/ErrorPage";
import { APP_DATA } from "./data/appData";

const App = () => {
  const getInitialInstalledApps = () => {
    try {
      const stored = localStorage.getItem("installedApps");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Could not load installed apps from localStorage", e);
      return [];
    }
  };

  const [installedApps, setInstalledApps] = useState(getInitialInstalledApps());
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "success" });

  const updateLocalStorage = useCallback((newIds) => {
    localStorage.setItem("installedApps", JSON.stringify(newIds));
    setInstalledApps(newIds);
  }, []);

  const showToast = useCallback((message, type = "success") => {
    setToast({ isVisible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const installApp = useCallback(
    (appId) => {
      if (!installedApps.includes(appId)) {
        const newIds = [...installedApps, appId];
        updateLocalStorage(newIds);
        const appName = APP_DATA.find((a) => a.id === appId)?.title || "App";
        showToast(`${appName} installed successfully!`, "success");
      }
    },
    [installedApps]
  );

  const uninstallApp = useCallback(
    (appId) => {
      const newIds = installedApps.filter((id) => id !== appId);
      updateLocalStorage(newIds);
      const appName = APP_DATA.find((a) => a.id === appId)?.title || "App";
      showToast(`${appName} has been uninstalled.`, "error");
    },
    [installedApps]
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <Header installedApps={installedApps} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-apps" element={<AllAppsPage />} /> 
                    <Route
            path="/details/:id"
            element={
              <AppDetailsPage
                installedApps={installedApps}
                installApp={installApp}
                uninstallApp={uninstallApp}
              />
            }
          />
          <Route
            path="/installed-apps"
            element={
              <MyInstalledAppsPage
                installedApps={installedApps}
                uninstallApp={uninstallApp}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;