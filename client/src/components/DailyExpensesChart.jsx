import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function DailyExpensesChart({ transactions, selectedMonth, onBack, onDateClick }) {
  const filtered = transactions.filter((t) => t.date.startsWith(selectedMonth));

  const dailyTotals = {};

  filtered.forEach((t) => {
    const day = t.date;
    if (!dailyTotals[day]) {
      dailyTotals[day] = 0;
    }
    dailyTotals[day] += t.amount;
  });

  const chartData = Object.entries(dailyTotals).map(([day, amount]) => ({
    day,
    amount,
  }));

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full">
    <button
        onClick={onBack}
        className="text-blue-600 mb-4 underline hover:text-blue-800"
      >
        ← Back to Months
      </button>

      <h2 className="text-lg font-semibold text-center mb-4">
        Daily Expenses - {selectedMonth}
      </h2>

      {chartData.length === 0 ? (
        <p className="text-center text-gray-500">No expenses found for this month.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            onClick={(e) => {
              if (e && e.activeLabel) {
                onDateClick(e.activeLabel); // Go to category wise day
              }
            }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default DailyExpensesChart;
