import "./ExpenseForm.css";
import React from "react";

const ExpenseForm = ( )=>{
    const titleChanger = (event) =>{
        
        console.log(event.target.value)
    }
    const amountChanger = (event) =>{
        console.log(event.target.value)
    } 
    const dateChanger = (event) =>{
        console.log(event.target.value)
    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChanger}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChanger}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChanger}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>


}

export default ExpenseForm;