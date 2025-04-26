import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BudgetComparisonChart({ transactions, budgets }) {
  const actualSpending = {};

  transactions.forEach(({ category, amount }) => {
    if (category) {
      actualSpending[category] = (actualSpending[category] || 0) + amount;
    }
  });

  const categories = Array.from(new Set([...Object.keys(budgets), ...Object.keys(actualSpending)]));

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Budget',
        backgroundColor: '#93C5FD',
        data: categories.map(cat => budgets[cat] || 0),
      },
      {
        label: 'Actual',
        backgroundColor: '#F87171',
        data: categories.map(cat => actualSpending[cat] || 0),
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Budget vs Actual</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BudgetComparisonChart;
