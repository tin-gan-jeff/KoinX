import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DonutChart = () => {
  const data = {
    labels: ['Crowdsale Investors', 'Foundation'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#3b82f6', '#f59e0b'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="w-64 h-64">
      <Doughnut
        data={data}
        options={{
          cutoutPercentage: 70,
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default DonutChart;
