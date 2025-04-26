import React from 'react';

function DashboardCards({ transactions }) {
  const totalExpense = transactions.reduce((sum, t) => sum + t.amount, 0);

  const categoryTotals = {};
  transactions.forEach(({ category, amount }) => {
    if (category) {
      categoryTotals[category] = (categoryTotals[category] || 0) + amount;
    }
  });

  const recentTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      {/* Total Expenses */}
      <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">Total Expenses</h2>
        <p className="text-2xl font-bold text-purple-900">₹{totalExpense.toFixed(2)}</p>
      </div>

      {/* Category Breakdown */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-lg font-semibold text-yellow-700 mb-2">Top Category</h2>
        {Object.keys(categoryTotals).length > 0 ? (
          <>
            <p className="text-xl font-bold text-yellow-900">
              {Object.keys(categoryTotals).reduce((a, b) => categoryTotals[a] > categoryTotals[b] ? a : b)}
            </p>
          </>
        ) : (
          <p className="text-gray-600">No data</p>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-green-700 mb-4">Recent Transactions</h2>
        <ul className="space-y-2 text-sm text-green-900">
          {recentTransactions.map((t) => (
            <li key={t.id} className="border-b border-green-300 pb-1">
              {t.description} - ₹{t.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardCards;
