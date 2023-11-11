import ExpenseItem from './component/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {

  if (props.item.length === 0) {
    return <h1 className='expense-list__fallback'>No expenses found</h1>;
  }
  return (
    <ul className='expense-list'>
      {props.item.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
