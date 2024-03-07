import React from "react";

const ProgressBar = ({ label, color, percentage }) => {
  return (
    <div className="flex flex-row items-center">
      <p className="text-gray-500 text-[13px] w-[50px]">{label}</p>

      <div className="w-[500px] h-[5px] flex flex-row items-center space-x-2">
        <div
          className={`bg-[${color}] h-full w-[${percentage}%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        />
        <p className="text-gray-500 text-[13px]">{percentage}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
