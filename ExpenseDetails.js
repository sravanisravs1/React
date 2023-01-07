import "./ExpenseDetails.css"
import Card from "../UI/Card";


const ExpenseDetails = (props) => {
    return(
        
            <Card className="expense-item__description">
                <h2>{props.title}</h2>
                <div>Spent in {props.locationOfExpenditure}</div>
                <div className="expense-item__price">Rs{props.amount}</div>
            </Card>
                    
    )

}

export default ExpenseDetails;