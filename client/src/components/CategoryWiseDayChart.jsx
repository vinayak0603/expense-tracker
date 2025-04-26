import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#3B82F6", "#8B5CF6", "#EC4899", "#14B8A6"];

function CategoryWiseDayChart({ transactions, selectedDate, onBack}) {
  // Filter transactions for the selected date
  const filtered = transactions.filter(t => t.date === selectedDate);

  // Group by category
  const categoryTotals = {};

  filtered.forEach(t => {
    if (!categoryTotals[t.category]) {
      categoryTotals[t.category] = 0;
    }
    categoryTotals[t.category] += t.amount;
  });

  const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount
  }));

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full">
      <h2 className="text-lg font-semibold text-center mb-4">
        Expenses on {selectedDate}
      </h2>
      <button
        onClick={onBack}
        className="text-blue-600 mb-4 underline hover:text-blue-800"
      >
        ← Back to Months
      </button>
      {chartData.length === 0 ? (
        <p className="text-center text-gray-500">No expenses found for this day.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default CategoryWiseDayChart;
