import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
    
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}> </ExpenseDate>
            <ExpenseDetails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={props.amount} />
            
        </Card>
    );    
}


export default ExpenseItem;