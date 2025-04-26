import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TransactionChart({ transactions, onMonthClick }) { // Accept onMonthClick prop
  const monthlyExpenses = Array(12).fill(0);

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).getMonth();
    monthlyExpenses[month] += transaction.amount;
  });

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Expenses (₹)',
        data: monthlyExpenses,
        backgroundColor: 'rgba(16, 185, 129, 0.6)', // Emerald
        borderColor: 'rgba(5, 150, 105, 1)',
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#047857', // dark green
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#374151' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#374151' },
      },
    },
    onClick: (event, elements, chart) => {
      if (!onMonthClick) return;

      const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (points.length > 0) {
        const monthIndex = points[0].index;
        const selectedMonth = monthIndex + 1;
        const formattedMonth = selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
        const year = new Date().getFullYear();
        onMonthClick(`${year}-${formattedMonth}`);  // Example: 2025-04
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">Monthly Expenses Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TransactionChart;
