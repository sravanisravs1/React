import ExpenseItem from './components/ExpenseItem';
function* jsxLoop(times, callback)
{
    for(var i = 0; i < times; ++i)
        yield callback(i);
}


function App() {
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
  return (
    <div>
      <h2>Basic Expense Tracker App </h2>
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
