import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React ,{useState} from "react";


const ExpenseItem = (props) => {
    const [amount,setTitle] = useState(props.amount);

    const clickHandler=()=>{
        setTitle("100");
        console.log(amount)

    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}> </ExpenseDate>
            <ExpenseDetails title={props.title} locationOfExpenditure={props.locationOfExpenditure} amount={amount} />
            <button onClick={clickHandler}>Change Expense</button>
            
        </Card>
    );    
}


export default ExpenseItem;