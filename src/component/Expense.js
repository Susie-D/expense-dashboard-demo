import { useState } from 'react';
import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from '../ExpenseList';
import ExpenseChart from './ExpenseChart';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  let filteredInfoText = '2021, 2022 & 2024';

  if (filteredYear === '2024') {
    filteredInfoText = '2021, 2022 & 2023';
  } else if (filteredYear === '2022') {
    filteredInfoText = '2021, 2023 & 2024';
  } else {
    filteredInfoText = '2022, 2023, 2024';
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filteredInfoText} is hidden.</p>
        {/* <ExpenseChart expense={filteredExpenses} /> */}
        <ExpenseList item={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
