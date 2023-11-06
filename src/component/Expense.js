import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import { expenses } from '../App';
import ExpensesFilter from './ExpenseFilter';
import './Expense.css';

const Expense = (props) => {

  // TODO: REFACTOR
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredInfoText, setFilteredInfoText] = useState('2019, 2021 & 2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilteredInfoText('2020, 2021 & 2022');
    } else if (selectedYear === '2020') {
      setFilteredInfoText('2019, 2021 & 2022');
    } else if (selectedYear === '2021') {
      setFilteredInfoText('2019, 2020 & 2022');
    } else if (selectedYear === '2022') {
      setFilteredInfoText('2019, 2021 & 2022');
    } else if (selectedYear === '2023') {
      setFilteredInfoText('2019, 2021, 2022');
    } else {
      setFilteredInfoText('2019, 2021, 2023');
    }
  };
  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filteredInfoText} is hidden.</p>
        {expenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expense;
