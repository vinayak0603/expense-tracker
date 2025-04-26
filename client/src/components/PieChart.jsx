import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ transactions }) {
  const categoryTotals = {};

  transactions.forEach(({ category, amount }) => {
    if (category) {
      categoryTotals[category] = (categoryTotals[category] || 0) + amount;
    }
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#34D399', // green
          '#60A5FA', // blue
          '#FBBF24', // yellow
          '#F87171', // red
          '#A78BFA', // purple
          '#F472B6'  // pink
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Category-wise Expenses</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
