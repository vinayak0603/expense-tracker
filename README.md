# Expense Tracker App

This is a React-based Expense Tracker application that helps users to manage their daily expenses, view budgets, track transactions, and visualize spending with insightful charts. It allows users to add, update, and delete transactions, view monthly spending, and analyze the expenses through pie charts and category-wise breakdowns.

## Features

- Add, edit, and delete transactions
- Track expenses by categories
- View monthly spending summary
- Pie chart for visualizing spending by category
- Budget tracking with comparison to actual spending
- Detailed daily and category-wise expense analysis
- Responsive design for different screen sizes

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React's `useState` and `useEffect` hooks
- **Local Storage**: Used for storing transactions and budgets

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vinayak0603/expense-tracker.git
   cd expense-tracker

2. **Install dependencies**:
  
   npm install

3. **Run the application**:
  
   npm run dev


## Usage

### Adding Transactions
- **Transaction Form**: You can add new transactions by entering the following details:
  - **Category**: Choose the category for your expense (e.g., Food, Transport, Entertainment, etc.).
  - **Amount**: Enter the amount for the transaction.
  - **Date**: Choose the date when the expense occurred.
  - **Description (Optional)**: Add a description for more detailed tracking.
  
  Once you fill in the form, click on the "Add Transaction" button, and it will be saved in the app and also in `localStorage` to persist data.

### Monthly View
- **Transaction Chart**: In the dashboard, you can click on any month to view all transactions for that particular month. 
  - The **Transaction Chart** will display a visual summary of transactions, showing which months have the highest spending.
  - Click on a month to filter all transactions for that selected period.

### Category-Wise View
- **Daily Expenses Breakdown**: After selecting a month, you can click on a specific date to view the breakdown of expenses for that day by category.
  - This will provide you with a **pie chart** or a **category-wise day chart** showing how much you spent on each category (Food, Entertainment, Transport, etc.) for that specific day.
  - You can click on the **Back** button to return to the monthly view.

### Insights and Budgeting
- **Budget Comparison**: You can input your budget for various categories using the **Budget Form**. After setting your budget, you will see a comparison between your budgeted amount and actual spending.
  - The **Budget vs Spending Comparison** chart will help you visualize whether you're overspending or staying within your limits.
  
- **Spending Insights**: The app provides insights into your spending behavior:
  - It will show you whether you are adhering to your set budgets.
  - You can also get a detailed analysis of your spending over time to identify patterns.

### Transaction List and Pie Chart
- **Transaction List**: View a list of all your transactions, including the category, amount, and description.
  - You can also **edit** or **delete** any transaction from this list.
  
- **Pie Chart**: The app will display a pie chart that breaks down your expenses by category (e.g., Food, Transport, Entertainment), helping you see where you spend the most.

## Live Link
   https://vinayak-expense-tracker.netlify.app/