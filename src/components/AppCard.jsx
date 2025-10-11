
import React from 'react';
import { Star, Download } from 'lucide-react';
import { formatCount } from '../utils/formatCount';

const AppCard = ({ app, onDetailsClick, actionButton = null }) => {
  const formattedRating = app.ratingAvg.toFixed(1);
  const formattedDownloads = formatCount(app.downloads);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition duration-300 border border-gray-100 flex flex-col justify-between h-full">
      <div className="flex-grow cursor-pointer" onClick={() => onDetailsClick(app.id)}>
        <div className="flex items-start space-x-3 mb-3">
          <div className={`w-12 h-12 flex-shrink-0 bg-${app.color}-100 rounded-lg flex items-center justify-center
           text-2xl font-extrabold shadow-inner`}>
            {app.icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 line-clamp-1">{app.title}</h3>
            <p className="text-xs text-gray-500">{app.companyName}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm border-t pt-3">
          <div className="flex items-center text-yellow-500 font-semibold">
            <Star className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
            {formattedRating}
          </div>
          <div className="flex items-center text-gray-600 font-medium text-xs sm:text-sm">
            <Download className="mr-1 w-3 h-3" />
            {formattedDownloads}
          </div>
        </div>
      </div>
      {actionButton && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          {actionButton}
        </div>
      )}
    </div>
  );
};

export default AppCard;