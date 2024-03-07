import React, { useState } from "react";
import PerformanceBar from "./PerformanceBar";
import Performance from "./Performance";
import { IoAlertCircleSharp } from "react-icons/io5";

const Tabs = ({ bitcoin }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Overviews",
    },
    {
      title: "Fundamentals",
    },
    {
      title: "Insights",
    },
    {
      title: "Sentiments",
    },
    {
      title: "Team",
    },
    {
      title: "Technicals",
    },
    {
      title: "Tokenomics",
    },
  ];

  return (
    <div className="">
      <div className="overflow-x-auto scrollbar-hide flex border-b-[1.5px] lg:space-x-16 space-x-10 lg:text-[14px] text-[12px] font-medium border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500 focus:outline-none"
                : "text-[#0b1426]"
            } rounded-t focus:outline-none`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {activeTab === 0 && (
        <div className="mt-4 rounded-md p-4 bg-white">
          <p className="text-[#0b1426] font-semibold text-[18px]">
            Performance
          </p>

          <div className="mt-4 space-y-4 mb-8">
            {bitcoin && bitcoin.length > 0 && (
              <>
                <Performance
                  leftLabel={"Today's Low"}
                  leftDigit={bitcoin[0]?.low_24h}
                  rightLabel={"Today's High"}
                  rightDigit={bitcoin[0]?.high_24h}
                />
                <Performance
                  leftLabel={"52W Low"}
                  leftDigit={bitcoin[0]?.low_24h}
                  rightLabel={"52 High"}
                  rightDigit={bitcoin[0]?.high_24h}
                />
              </>
            )}
          </div>

          <p className="text-[#0b1426] flex flex-row items-center font-semibold text-[15px]">
            Fundamentals
            <IoAlertCircleSharp color="gray" className="ml-2" />
          </p>

          <div className="lg:grid grid-cols-4 gap-14 mt-4 items-start">
            <div className="col-span-2 space-y-4">
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  Bitcoin Price
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  {bitcoin[0]?.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  24h High / 24h Low
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  $16,815.46 / $16,815.46
                </p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  7d High / 7d Low
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  $16,815.46 / $16,815.46
                </p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  Trending volume
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  $23,815,460,815
                </p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  Market Cap Rank
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  #{bitcoin[0]?.market_cap_rank}
                </p>
              </div>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  Market Cap
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">
                  {bitcoin[0]?.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  Market Cap Dominance
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">16.46%</p>
              </div>
              <div className="border-b-[1.5px] pb-4 border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  VOlume / Market Cap
                </p>
                <p className="text-[#0b1426] text-[13px] font-medium">1.46</p>
              </div>
              <div className="border-b-[1.5px] border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  All-Time Hight
                </p>
                <div className="flex flex-col items-end">
                  <p className="text-[#0b1426] text-[13px] font-medium">
                    $23,815.77 <span className="text-red-500">-46.9%</span>
                  </p>
                  <p className="text-[#0b1426] text-[10px]">
                    Nov 10, 2021 (about 1 year)
                  </p>
                </div>
              </div>
              <div className="border-b-[1.5px] border-gray-300 flex flex-row items-center justify-between">
                <p className="text-gray-500 text-[12px] font-medium">
                  All-Time Low
                </p>
                <div className="flex flex-col items-end">
                  <p className="text-[#0b1426] text-[13px] font-medium">
                    $25.77 <span className="text-green-500">4690.9%</span>
                  </p>
                  <p className="text-[#0b1426] text-[10px]">
                    Nov 10, 2021 (about 1 year)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
