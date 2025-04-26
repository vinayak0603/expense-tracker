import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import TransactionChart from './components/TransactionChart';
import PieChart from './components/PieChart';
import DashboardCards from './components/DashboardCards';
import BudgetComparisonChart from './components/BudgetComparisonChart';
import BudgetForm from './components/BudgetForm';
import SpendingInsights from './components/SpendingInsights';
import DailyExpensesChart from "./components/DailyExpensesChart";
import CategoryWiseDayChart from "./components/CategoryWiseDayChart";

function App() {
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  });

  const [budgets, setBudgets] = useState(() => {
    const stored = localStorage.getItem('budgets');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const updateTransaction = (updated) => {
    setTransactions(transactions.map(t => t.id === updated.id ? updated : t));
    setEditingTransaction(null);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleBackFromDay = () => {
    setSelectedDate(null); // Go back from CategoryWiseDayChart to DailyExpensesChart
  };

  const handleBackFromMonth = () => {
    setSelectedMonth(null); // Go back from DailyExpensesChart to Month overview
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-6 bg-gray-900">
      <div className="max-w-6xl w-full space-y-6">
        {/* Dashboard top cards */}
        <DashboardCards transactions={transactions} />

        {/* Transaction Form */}
        <TransactionForm
          addTransaction={addTransaction}
          updateTransaction={updateTransaction}
          editingTransaction={editingTransaction}
        />

        {/* Budget form and Transaction chart */}
        <div className="grid md:grid-cols-2 gap-6">
          <BudgetForm budgets={budgets} setBudgets={setBudgets} />

          <div className="max-w-6xl w-full space-y-6">
            {/* Month → Daily → Category */}
            {!selectedMonth ? (
              <TransactionChart
                transactions={transactions}
                onMonthClick={(month) => setSelectedMonth(month)}
              />
            ) : selectedDate ? (
              <CategoryWiseDayChart
                transactions={transactions}
                selectedDate={selectedDate}
                onBack={handleBackFromDay} // Back to daily chart
              />
            ) : (
              <DailyExpensesChart
                transactions={transactions}
                selectedMonth={selectedMonth}
                onBack={handleBackFromMonth} // Back to month chart
                onDateClick={(date) => setSelectedDate(date)} // Click date to see category wise
              />
            )}
          </div>
        </div>

        {/* Transaction List and overall Pie Chart */}
        <div className="grid md:grid-cols-2 gap-6">
          <TransactionList
            transactions={transactions}
            onEdit={setEditingTransaction}
            onDelete={deleteTransaction}
          />
          <div className="flex flex-col gap-6">
            <PieChart transactions={transactions} />
          </div>
        </div>

        {/* Budget comparison and Spending insights */}
        <BudgetComparisonChart transactions={transactions} budgets={budgets} />
        <SpendingInsights transactions={transactions} budgets={budgets} />

      </div>
    </div>
  );
}

export default App;
