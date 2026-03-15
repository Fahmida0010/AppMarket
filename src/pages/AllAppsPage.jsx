import React, { useState, useMemo } from "react";
import { Search, ArrowDown, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import AppCard from "../components/AppCard";
import { APP_DATA } from "../data/appData";

const AllAppsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");   // final search
  const [sortOrder, setSortOrder] = useState("none");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 🔹 ENTER press search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setQuery(searchTerm);   // apply search
      setIsLoading(false);
    }, 400);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
  };

  const displayedApps = useMemo(() => {
    let apps = APP_DATA;

    if (query) {
      const lowerCaseSearchTerm = query.toLowerCase();
      apps = apps.filter((app) =>
        app.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    if (sortOrder !== "none") {
      apps = [...apps].sort((a, b) => {
        if (sortOrder === "high-low") return b.downloads - a.downloads;
        if (sortOrder === "low-high") return a.downloads - b.downloads;
        return 0;
      });
    }

    return apps;
  }, [query, sortOrder]);

  const sortIcon =
    sortOrder === "high-low" ? (
      <ArrowDown className="w-4 h-4 ml-2" />
    ) : sortOrder === "low-high" ? (
      <ArrowUp className="w-4 h-4 ml-2" />
    ) : null;

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900">Our All Applications</h1>
        <p className="text-lg text-gray-500 mt-2 max-w-2xl mx-auto">
          Explore All Apps On The Market Developed By Us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-md border border-gray-200">

        {/* 🔹 Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full md:w-80 mb-4 md:mb-0"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search apps by title..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
          />
        </form>

        <div className="relative flex items-center w-full md:w-auto">
          <label className="text-gray-600 font-medium mr-2 whitespace-nowrap">
            Sort by Downloads:
          </label>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="appearance-none block w-full py-3 pl-3 pr-10 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="none">No Sorting</option>
            <option value="high-low">High to Low</option>
            <option value="low-high">Low to High</option>
          </select>

          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            {sortIcon || <ArrowDown className="w-4 h-4" />}
          </span>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : displayedApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayedApps.map((app) => (
            <AppCard key={app.id} app={app} onDetailsClick={() => handleDetailsClick(app.id)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-gray-700 mb-2">No App Found</h3>
          <p className="text-gray-500">
            We couldn't find any app matching "{query}".
          </p>
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;