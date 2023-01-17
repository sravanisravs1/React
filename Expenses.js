import React,{useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  } ;
  const filteredExpenses= props.items.filter((expense) => {
    return expense.date.getFullYear().toString()===filteredYear;
  })
  
  
  return (
    <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {/* {
            props.items.map((expense)=>(
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.locationOfExpenditure}/>
            ))
          } */}
          <ExpenseChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
    </div>

  );
}

export default Expenses;