import React , {useState , useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModel from "../UI/ErrorModel/ErrorModel";
import Wrapper from "../../Helpers/Wrapper/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef= useRef();
    

    // const [enteredUserName,setUserName ] = useState("");
    // const [enteredAge,setUseAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value;
        console.log(nameInputRef.current.value,ageInputRef.current.value,collegeInputRef.current.value);
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if (+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"please enter a valid age(>0)."
            })
            return
        }
        //console.log(enteredUserName,enteredAge);
        props.onAddUser(enteredUserName,enteredAge,enteredCollegeName);
        nameInputRef.current.value ='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';
        // setUserName('');
        // setUseAge('');
        }

    // const userNameChangeHandler =(event) => {
    //     setUserName(event.target.value);
    // }    

    // const ageChangeHandler=(event) => {
    //     setUseAge(event.target.value);
    // }

    const errorHandler =() =>{
        setError(null);
    }
    

    return (<Wrapper>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit = {addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id ="username" 
                type="text" 
                // value={enteredUserName}
                // onChange={userNameChangeHandler}
                ref={nameInputRef}>

                </input>
                <label htmlFor="age">Age</label>
                <input id ="age" 
                // onChange={ageChangeHandler} 
                // value={enteredAge}
                type="number"
                ref= {ageInputRef}></input>
                <label htmlFor="collegename">CollegeName</label>
                <input id ="collegename" 
                type="text" 
                // value={enteredUserName}
                // onChange={userNameChangeHandler}
                ref={collegeInputRef}></input>
                <Button type="submit">Add User</Button>
            </form>

         </Card>

    </Wrapper>
    )

};

export default AddUser;