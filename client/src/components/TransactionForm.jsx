import React, { useState, useEffect } from 'react';

function TransactionForm({ addTransaction, editingTransaction, updateTransaction }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const categories = ["Food", "Transport", "Shopping", "Utilities", "Entertainment", "Other"];


  useEffect(() => {
    if (editingTransaction) {
      setAmount(editingTransaction.amount);
      setDate(editingTransaction.date);
      setDescription(editingTransaction.description);
    } else {
      setAmount('');
      setDate('');
      setDescription('');
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0 || !date || !description) {
      alert('Please fill all fields correctly.');
      return;
    }

    const newTransaction = {
      amount: parseFloat(amount),
      date,
      description,
      category
    };

    if (editingTransaction) {
      updateTransaction({ ...newTransaction, id: editingTransaction.id });
    } else {
      addTransaction(newTransaction);
    }

    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-md mb-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{editingTransaction ? 'Edit Transaction' : 'Add Transaction'}</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <input
          type="text"
          placeholder="What was this for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
        />
         <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
  >
    <option value="">Select Category</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition">
        {editingTransaction ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default TransactionForm;
