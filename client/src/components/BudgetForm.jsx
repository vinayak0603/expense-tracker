import React, { useState } from 'react';

function BudgetForm({ budgets, setBudgets }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    setBudgets(prev => ({
      ...prev,
      [category]: parseFloat(amount)
    }));
    setCategory('');
    setAmount('');
  };

  const categories = ["Food", "Transport", "Shopping", "Utilities", "Entertainment", "Other"];

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Set Category Budget</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter Budget Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
          Set Budget
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;
