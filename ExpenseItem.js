import "./ExpenseItem.css"

function ExpenseItem(){

    const expenseItem="Car Insurance";
    const expenseDate=new Date(2020,0,5);
    const expenseAmount=300;
    const locationOfExpenditure='Mumbai';
    return (
        <div className="expense-item">
            <div >{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                 <h2>{expenseItem}</h2>
                 <div>Spent in {locationOfExpenditure}</div>
                 <div className="expense-item__price">Rs{expenseAmount}</div>

            </div>
            
        </div>
    );    
    

}

export default ExpenseItem;