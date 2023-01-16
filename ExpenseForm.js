import "./ExpenseForm.css";
import React,{useState} from "react";


const ExpenseForm = ( props )=>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] =useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const[enteredLocation,setEnteredLocation]=useState('')
    // const [userInput,setUserInput] =useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChanger= (event) =>{
        // setUserInput((prevState)=>{
        //     return {setEnteredTitle:event.target.value,
        //     ...userInput}
        // })
        setEnteredTitle(event.target.value)
    }
    const amountChanger = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput((prevState)=>{
        //     return {setEnteredAmount:event.target.value,
        //     ...userInput}
        // })
    } 
    const dateChanger = (event) =>{
        // setUserInput((prevState)=>{
        //     return {setEnteredDate:event.target.value,
        //     ...userInput}
        setEnteredDate(event.target.value)
        }
    const locationHandler=(event) =>{
        setEnteredLocation(event.target.value)
    } 
       
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            date:new Date(enteredDate),
            amount:enteredAmount,
            location:enteredLocation
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredLocation('')
    } 
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" 
                value={enteredTitle}
                onChange={titleChanger}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" 
                value={enteredAmount}
                onChange={amountChanger}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"
                value={enteredDate}
                onChange={dateChanger}/>
            {/* <div className="new-expense__control">
                <label>Location</label>
                <input type="text" 
                value={enteredLocation}
                onChange={locationHandler}/>    
            </div> */}
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel </button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
        </div>
    </form>


}

export default ExpenseForm;