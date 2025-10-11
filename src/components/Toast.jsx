import React, { useEffect } from 'react';
import { Info, XCircle } from 'lucide-react';

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {

      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);


  const transitionClasses = isVisible
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-x-full';

  let bgColor, Icon;
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      Icon = Info;
      break;
    case 'error':
      bgColor = 'bg-red-500';
      Icon = XCircle;
      break;
    default:
      bgColor = 'bg-gray-700';
      Icon = Info;
  }

  return (
    <div
      className={`
        fixed top-5 right-5 z-[9999] w-full max-w-sm transition-all duration-500 ease-in-out
        ${transitionClasses}`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}>
      <div className={`flex items-center p-4 rounded-xl shadow-lg text-white ${bgColor}`}>
        <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
        <p className="font-medium flex-grow">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition flex-shrink-0"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;