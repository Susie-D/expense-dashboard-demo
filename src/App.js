import './App.css';
import Expense from './component/Expense';
import NewExpense from './component/NewExpense';

export const expenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: 'e2', title: 'Toliet', amount: 294.67, date: new Date(2021, 2, 28) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const addExpenseHandler = (expense) => {
  console.log('in App');
  console.log(expense);
};

function App() {
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense key={expenses.id} item={expenses} />
    </div>
  );
}

export default App;
