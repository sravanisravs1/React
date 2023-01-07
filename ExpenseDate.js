import "./ExpenseDate.css";

function ExpenseDate(props){
    const date=props.date;
    const month=date.toLocaleString("en-US",{month:"long"});
    const day=date.toLocaleString("en-US",{day:"2-digit"})
    const year=date.getFullYear();
    return (
        <div className="expense-date">
             <div className="expense-date__month">{month}</div>
             <div className="expense-date__year"> {day} th</div>
             <div className="expense-item__price"> {year}</div>
        </div>
        
    );

}

export default ExpenseDate;