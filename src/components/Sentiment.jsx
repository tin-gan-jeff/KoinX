import React from 'react'
import { IoAlertCircleSharp } from 'react-icons/io5'
import CardCarousel from './CardCarousel'
import ProgressBar from './ProgressBar'

const Sentiment = () => {
  return (
    <div className="rounded-md overflow-hidden lg:p-4 pb-2 lg:pb-4 bg-white">
         <p className="text-[#0b1426] px-2 pt-2 lg:pt-0 lg:px-0 font-semibold text-[18px]">
            Sentiment
          </p>
      <p className="text-[#0b1426] flex flex-row px-2 pt-2 lg:pt-0 lg:px-0 items-center lg:mt-2 font-semibold text-[15px]">
            Key Events
            <IoAlertCircleSharp color="gray" className="ml-2" />
          </p>

        <div className="w-full mt-2 pl-2 lg:pl-0">
          <CardCarousel />
        </div>

        <div className="mt-4">
        <p className="text-[#0b1426] flex flex-row items-center lg:mt-2 px-2 pt-2 lg:pt-0 lg:px-0 font-semibold text-[15px]">
            Analyst Estimates
            <IoAlertCircleSharp color="gray" className="ml-2" />
          </p>

          <div className="flex flex-row space-x-4 lg:items-center items-start mt-4 mb-4">
            <div className="bg-[#c5fce8] rounded-full px-4 py-[20px] ml-2 items-center justify-center flex">
                <p className="text-[#0fba83] text-[18px] font-medium">41<span>%</span></p>
            </div>
            <div className="lg:space-y-3 space-y-1">
                <ProgressBar label={"Buy"} color={"#0fba83"} percentage={41} />
                <ProgressBar label={"Hold"} color={"#c7c8ce"} percentage={8} />
                <ProgressBar label={"Sell"} color={"#f7324c"} percentage={16} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sentiment
