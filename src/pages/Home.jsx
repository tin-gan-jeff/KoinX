import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { IoArrowForwardSharp } from "react-icons/io5";

import icon from "../assets/icon.png";
import PriceChart from "../components/PriceChart";
import Tabs from "../components/Tabs";
import Sentiment from "../components/Sentiment";
import About from "../components/About";
import Tokenomic from "../components/Tokenomic";
import Team from "../components/Team";
import CoinsCarousel from "../components/CoinsCarousel";
import Container from "../components/Container";

const Home = () => {
  const [bitcoin, setBitcoin] = useState(null);
  const [priceInInrUsd24hr, setPriceInInrUsd24hr] = useState(null);
  const [topTrendingCoins, setTopTrendingCoins] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const getBitcoinData = async () => {
      try {
        // Fetch Bitcoin data
        const bitcoinResponse = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_api_key=CG-FA8CawsDF9N127NpGWYzBjnL"
        );
        setBitcoin(bitcoinResponse.data);

        // Fetch Bitcoin price in INR and USD with 24h change
        const priceInInrUsd24hrResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&x_cg_api_key=CG-FA8CawsDF9N127NpGWYzBjnL"
        );

        const trendingCoins = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        // Extract the first three items from the response data
        const topTrendingCoinsData = trendingCoins.data.coins.slice(0, 3);

        // Update the state with the trending coins data
        setTopTrendingCoins(topTrendingCoinsData);
        setTrendingCoins(trendingCoins.data.coins);
        setPriceInInrUsd24hr(priceInInrUsd24hrResponse.data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    getBitcoinData();
  }, []);

  return (
    <div>
    <div className="px-2 lg:px-14 py-3">
      <div className="flex flex-row pb-3 items-center space-x-2">
        <p className="text-[#768396] text-[14px]">Cryptocurrencies</p>
        <BsChevronDoubleRight color="#768396" size={12} className="-mb-1" />
        <p className="text-[#0b1426] text-[14px]">Bitcoin</p>
      </div>

      <div className="lg:grid grid-cols-7 gap-4 items-start">
        <div className="col-span-5">
          <div className="lg:bg-white rounded-md lg:p-4">
            {bitcoin && bitcoin.length > 0 && (
              <div className="bg-white flex flex-row p-2 rounded-md lg:p-0 items-center space-x-6">
                <div className="flex flex-row items-center space-x-2">
                  <img
                    src={bitcoin[0].image}
                    className="w-7 h-7 rounded-full"
                    alt="Bitcoin"
                    />
                  <div className="flex flex-row space-x-2 items-center">
                    <p className="text-[#0b1426] font-semibold capitalize text-[18px]">
                      {bitcoin[0].id}
                    </p>
                    <p className="text-[#768396] font-semibold uppercase text-[13px]">
                      {bitcoin[0].symbol}
                    </p>
                  </div>
                </div>
                <div className="bg-[#768396] px-[10px] py-[5px] rounded-md">
                  <p className="text-[14px]">
                    Rank #{bitcoin[0].market_cap_rank}
                  </p>
                </div>
              </div>
            )}

            <div className="lg:my-6 mb-6 p-2 lg:p-0 rounded-md  bg-white">
              <div className="flex flex-row items-center space-x-8">
                <p className="text-[#0b1426] font-bold text-[20px]">
                  {priceInInrUsd24hr?.usd?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <div>
                  {bitcoin &&
                    bitcoin.length > 0 &&
                    (bitcoin[0].price_change_percentage_24h > 0 ? (
                      <div className="flex flex-row items-center space-x-3">
                        <div className="bg-[#ebf9f4] flex px-2 py-[3px] rounded-md items-center space-x-1 flex-row">
                          <BsCaretUpFill color="#14b079" />
                          <p className="text-[#14b079]">
                            {(bitcoin[0]?.price_change_percentage_24h).toFixed(
                              2
                            )}
                            %
                          </p>
                        </div>
                        <div className="">
                          <p className="text-[#768396] text-[13px]">(24H)</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-row items-center space-x-3">
                        <div className="bg-[#ff00002a] flex px-2 py-[3px] rounded-md items-center space-x-1 flex-row">
                          <BsCaretDownFill color="#ff0000" />
                          <p className="text-[#ff0000]">
                            {(bitcoin[0]?.price_change_percentage_24h).toFixed(
                              2
                            )}
                            %
                          </p>
                        </div>
                        <div className="">
                          <p className="text-[#768396] text-[13px]">(24H)</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <p className="text-[#0b1426] font-medium text-[13px]">
                {priceInInrUsd24hr?.inr?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </p>
            </div>

            <div className="w-full lg:h-[400px] h-[355px] overflow-hidden">
              <PriceChart />
            </div>
          </div>

          <div className="mt-4">{bitcoin && <Tabs bitcoin={bitcoin} />}</div>

          <div className="mt-4">
            <Sentiment />
          </div>

          <div className="mt-4">
            <About />
          </div>

          <div className="mt-4">
            <Team />
          </div>

          <div className="lg:hidden">
          <div>
            <CoinsCarousel coins={trendingCoins} title={"You May Also Like"} />
          </div>
          <div className="lg:-mt-4">
            <CoinsCarousel coins={trendingCoins} title={"Trending Coins"} />
          </div>
          </div>
        </div>

        <div className="flex-col col-span-2 space-y-4 hidden lg:flex">
          <Container topTrendingCoins={topTrendingCoins} />
        </div>

      </div>
    </div>


      <div className="rounded-md hidden lg:block lg:p-4 p-2 bg-white mt-8">
          <div>
            <CoinsCarousel coins={trendingCoins} title={"You May Also Like"} />
          </div>
          <div className="-mt-4">
            <CoinsCarousel coins={trendingCoins} title={"Trending Coins"} />
          </div>
         </div>

         <div className="flex-col col-span-2 space-y-4 mt-4 lg:hidden">
          <Container topTrendingCoins={topTrendingCoins} />
        </div>
      </div>
  );
};

export default Home;
