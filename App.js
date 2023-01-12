import React from 'react';
//import ExpenseDate from './components/ExpenseDate';
import ExpenseItem from './components/Expenses/ExpenseItem';

import NewExpense from './components/NewExpense/NewExpense';

function* jsxLoop(times, callback)
{
    for(var i = 0; i < times; ++i)
        yield callback(i);
}


const App = ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure:"Mumbai",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,locationOfExpenditure:"Hyderabad",},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure:"Assam",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure:"Vijayawada",
    },
  ];
  // return React.createElement('div',{},
  //     React.createElement(ExpenseDate,{date:expenses[0].date}),
  //     React.createElement("div",{},
  //     React.createElement('h1',{},'Expense 1'),
  //     React.createElement('h1',{},'Expense 1'))  
      
      
  //     );
  
  
  const addExpenseHandler=(expense)=>{
    console.log(expense) 
  }    
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {
        [...jsxLoop(expenses.length,i=>
          <ExpenseItem 
          title={expenses[i].title}
          amount={expenses[i].amount}
          date={expenses[i].date}
          locationOfExpenditure={expenses[i].locationOfExpenditure}>
        </ExpenseItem>
        )]
      }
    
    </div>
  );
}

export default App;
