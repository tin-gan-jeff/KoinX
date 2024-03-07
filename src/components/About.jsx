import React from "react";
import aboutImgLeft from "../assets/aboutImgLeft.png";
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="rounded-md lg:p-4 p-2 bg-white">
      <div className="border-b-[1.5px] border-gray-300 pb-4">
        <p className="text-[#0b1426] font-semibold text-[18px]">
          About Bitcoin
        </p>
        <p className="text-[#0b1426] font-bold mt-2 text-[14px]">
          What is Bitcoin
        </p>
        <p className="text-[#0b1426] mt-2 text-[14px] text-justify">
          Bitcoin's price today is US$16.951.12, with a 24-hour trading volumne
          of $19.14. BTC is +0.36% in the last 24 hours. It is currently -7.70%
          from its 7-day all-time high of $18,366.66 and 3.40% from it's 7-day
          all-time low of $16,394.75. BTC has a circulating supply of 19.24 M
          BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <div className="border-b-[1.5px] border-gray-300 pb-4">
      <p className="text-[#0b1426] font-bold mt-3 text-[14px]">
          Lorem iptum dolor sit amet
        </p>
        <p className="text-[#0b1426] mt-2 text-[13px] text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <p className="text-[#0b1426] mt-6 text-[13px] text-justify">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>

        <p className="text-[#0b1426] mt-6 text-[13px] text-justify">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>

      <div className="border-b-[1.5px] border-gray-300 pb-4 mt-4">
      <p className="text-[#0b1426] font-semibold text-[18px]">
          Already holding Bitcoin?
        </p>

        <div className="lg:flex lg:flex-row lg:space-x-4 mt-2">
            <div className="flex-1 flex flex-row items-center space-x-4 p-4 bg-gradient-to-br rounded-md from-green-300 to-blue-700">
              <img src={aboutImgLeft} className="h-[120px] w-[120px] overflow-hidden rounded-md" alt="Bitcoin" />
              <div>
                <p className="font-semibold">Calculate your <br /> <span>Profits</span></p>
                <button className="flex flex-row items-center text-[#0b1426] bg-white mt-4 px-4 py-[6px] font-medium rounded-md">
                  Check Now<IoArrowForwardSharp className="ml-2" />
            </button>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center mt-4 lg:mt-0 space-x-4 p-4  bg-gradient-to-br rounded-md from-orange-400 to-red-500">
            <img src={aboutImgLeft} className="h-[120px] w-[120px] overflow-hidden rounded-md" alt="Bitcoin" />
              <div>
                <p className="font-semibold">Calculate your taxe<br /> <span>liability</span></p>
                <button className="flex flex-row items-center text-[#0b1426] bg-white mt-4 px-4 py-[6px] font-medium rounded-md">
                  Check Now<IoArrowForwardSharp className="ml-2" />
            </button>
              </div>
            </div>
        </div>
      </div>

      <p className="text-[#0b1426] mt-2 text-[13px] text-justify">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
    </div>
  );
};

export default About;
