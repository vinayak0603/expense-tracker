import React from 'react';

function TransactionList({ transactions, onEdit, onDelete }) {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl shadow-md mb-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-600">No transactions added yet.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <div>
                <p className="font-semibold text-lg">{transaction.description}</p>
                <p className="text-sm text-gray-500">
                  ₹{transaction.amount.toFixed(2)} • {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(transaction)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-3 py-1 rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(transaction.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
