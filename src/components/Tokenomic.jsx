import React from 'react'
import DonutChart from './DonutChart'

const Tokenomic = () => {
  return (
    <div className="rounded-md p-4 bg-white">
        <p className="text-[#0b1426] font-semibold text-[18px]">
          Tokenomics
        </p>
        <p className="text-[#0b1426] font-bold mt-2 text-[14px]">
          Initial Distribution
        </p>
        <div className="w-64 h-64">
        <DonutChart />
        </div>
    </div>
  )
}

export default Tokenomic