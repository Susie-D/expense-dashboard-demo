import { useState } from 'react';
import './Form.css';

const ExpenseForm = (props) => {
  const [titleEntered, setTitle] = useState('');
  const [amountEntered, setAmount] = useState('');
  const [dateEntered, setDateEntered] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   dateEntered: '',
  // });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    setTitle(e.target.value);
  };

  //   setUserInput((prevState) => {
  //     return { ...prevState, setTitle: e.target.value };
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     setAmount: e.target.value,
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     setDateEntered: e.target.value,
  //   });
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'dateEntered') {
      setDateEntered(value);
    } else {
      setAmount(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDateEntered('');
  };

  return (
    <div className='new-expense'>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={titleEntered}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={amountEntered}
              onChange={(e) =>
                inputChangeHandler('amountEntered', e.target.value)
              }
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2025-12-02'
              value={dateEntered}
              onChange={(e) =>
                inputChangeHandler('dateEntered', e.target.value)
              }
            />
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
