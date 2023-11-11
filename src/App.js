import { useState } from 'react';
import Expenses from './component/Expense';
import NewExpense from './component/NewExpense';
import './App.css';

export const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book',
    amount: 29.67,
    date: new Date(2021, 1, 28),
  },
  {
    id: 'e2',
    title: 'Toliet Paper',
    amount: 11.99,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 156.67,
    date: new Date(2023, 12, 28),
  },
  {
    id: 'e4',
    title: 'Car Payment',
    amount: 200.0,
    date: new Date(2023, 1, 28),
    month: () => {
      // eslint-disable-next-line no-unused-expressions
      DUMMY_EXPENSES.date.getMonth - 1;
    },
  },
];

// .map((m) => m.date.getMonth - 1);

function App() {
  console.log('data', DUMMY_EXPENSES);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses key={expenses.id} item={expenses} />
    </div>
  );
}

export default App;
