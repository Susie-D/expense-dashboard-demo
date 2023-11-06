import ExpenseForm from './Form';

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </>
  );
}
