import React from "react";
import { BsCaretUpFill } from "react-icons/bs";
import { IoArrowForwardSharp } from "react-icons/io5";
import icon from "../assets/icon.png";

const Container = ({ topTrendingCoins }) => {
  return (
    <>
    <div className="px-2 lg:px-0">
      <div className="bg-[#0052fe] flex-col flex items-center rounded-md p-4 pb-8">
        <p className="text-[18px] font-semibold text-center">
          Get Started with KoinX <br /> for FREE
        </p>
        <p className="my-4 text-center text-[14px]">
          With our range of features that you can equipe for free, KoinX allows
          you to be more educated and aware of your tax reports
        </p>
        <img src={icon} className="h-52" alt="koinX" />
        <button className="flex flex-row items-center text-[#0b1426] bg-white mt-4 px-4 py-2 font-medium rounded-md">
          Get started for FREE <IoArrowForwardSharp className="ml-2" />
        </button>
      </div>
    </div>

      <div className="bg-white flex-col flex rounded-lg px-4 pt-4">
        <p className="text-[#0b1426] font-semibold text-[17px]">
          Trending Coins (24h)
        </p>
        <div className="mt-4">
          {topTrendingCoins.map((coin, index) => (
            <div key={index} className="flex flex-row justify-between mb-4">
              <div className="flex flex-row items-center space-x-2">
                <img
                  src={coin.item.small}
                  className="w-6 h-6 rounded-full"
                  alt={coin.item.name}
                />
                <div className="flex flex-row">
                  <p className="text-[#0b1426] font-medium text-[12px]">
                    {coin.item.name}
                  </p>
                  <p className="text-[#0b1426] font-medium text-[12px]">
                    ({coin.item.symbol})
                  </p>
                </div>
              </div>
              <div className="bg-[#ebf9f4] flex px-2 py-[3px] rounded-md items-center space-x-1 flex-row">
                <BsCaretUpFill color="#14b079" />
                <p className="text-[#14b079] text-[12px] font-medium">
                  {Math.abs(
                    coin?.item?.data?.price_change_percentage_24h?.btc
                  ).toFixed(2)}
                  %
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
