import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
    
    const clickHandler=()=>{
        console.log("Updated")

    }
    const deleteTitle=()=>{
        console.log("Deleted")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}> </ExpenseDate>
            <ExpenseDetails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteTitle}></button>
        </Card>
    );    
}


export default ExpenseItem;