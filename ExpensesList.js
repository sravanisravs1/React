import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    let expensesContent = <p>No Expenses Found.</p>;
    if (props.items.length ===0) {
        return <h2 className="expenses=list__fallback">No Expenses Found.</h2>;
    }

    if (props.items.length ===1) {
        return <div>
            <ul className="expenses-list">
               {props.items.map((expense)=> (
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.locationOfExpenditure}/>
        ))}

            </ul>
            <h2>Add more Expenses</h2>
        </div>
    }
    
    return <ul className="expenses-list">
        {props.items.map((expense)=> (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.locationOfExpenditure}/>
        ))}

    </ul>
}


export default ExpensesList;