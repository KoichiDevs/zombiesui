import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Ecosystem',
    'Private Sale',
    'IDO',
    'Marketing',
    'Advisor',
    'Reward Pool',
    'SuiZombie Team',
    'Airdrop',
    'Liquidity',
  ],
  datasets: [
    {
      data: [9, 10, 12, 6, 3, 45, 6, 1, 8],
      backgroundColor: [
        '#90caf9',
        '#f48fb1',
        '#64b5f6',
        '#ffb74d',
        '#ba68c8',
        '#81c784',
        '#b2dfdb',
        '#ffcc80',
        '#e57373',
      ],
      hoverBackgroundColor: [
        '#64b5f6',
        '#f06292',
        '#42a5f5',
        '#ff9800',
        '#9c27b0',
        '#4caf50',
        '#80cbc4',
        '#ffb74d',
        '#ef5350',
      ],
    },
  ],
};

const PieChart = () => {
  const [chartData, setChartData] = useState(data);

  return (
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="text-3xl font-bold mb-4">Allocation Pie Chart</div>
      <div className="flex justify-center items-center">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
