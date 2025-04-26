import React from 'react';

function SpendingInsights({ transactions, budgets }) {
  const actualSpending = {};

  transactions.forEach(({ category, amount }) => {
    if (category) {
      actualSpending[category] = (actualSpending[category] || 0) + amount;
    }
  });

  const overspentCategories = Object.keys(budgets).filter(cat => {
    return actualSpending[cat] && actualSpending[cat] > budgets[cat];
  });

  return (
    <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Spending Insights</h2>
      {overspentCategories.length > 0 ? (
        <ul className="list-disc ml-6 text-red-800">
          {overspentCategories.map(cat => (
            <li key={cat}>Overspent in {cat}! Planned: ₹{budgets[cat]}, Spent: ₹{actualSpending[cat].toFixed(2)}</li>
          ))}
        </ul>
      ) : (
        <p className="text-green-700">You're within your budget in all categories! 🎉</p>
      )}
    </div>
  );
}

export default SpendingInsights;
