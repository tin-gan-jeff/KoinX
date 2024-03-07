import React from "react";

const PerformanceBar = ({minValue, maxValue}) => {
  const currentValue = maxValue;
  const percentage = ((currentValue - minValue) / (maxValue - minValue)) * 100;
  return (
    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden relative">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
          {minValue} - {maxValue}
        </div>
      </div>
    </div>
  );
};

export default PerformanceBar;
