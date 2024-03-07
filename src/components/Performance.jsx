import React from "react";
import PerformanceBar from "./PerformanceBar";

const Performance = ({ leftLabel, leftDigit, rightLabel, rightDigit }) => {
  return (
    <div className="flex flex-row items-center space-x-10">
      <div className="space-y-1 w-20 flex flex-col items-start">
        <p className="text-[13px] text-gray-600">{leftLabel}</p>
        <p className="text-[#0b1426] text-[13px] font-medium">
          {leftDigit.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <PerformanceBar minValue={46930.22} maxValue={49343.83} />
      <div className="space-y-1 w-20 flex flex-col items-end">
        <p className="text-[13px] text-gray-600">{rightLabel}</p>
        <p className="text-[#0b1426] text-[13px] font-medium">
          {rightDigit.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
};

export default Performance;
