import React  from "react";
import ReactDom from 'react-dom';
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModel.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
};

const ModelOverlay=(props) =>{
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onClick}>Okay</Button>

        </footer>
    </Card>
        
    );
};
const ErrorModel= props =>{
    
    return(<React.Fragment>
        {ReactDom.createPortal(
        <Backdrop 
        onConfirm={props.onConfirm}/>,
        document.getElementById('backdrop-root'))}

        {ReactDom.createPortal(
            <ModelOverlay 
            title={props.title}
            message={props.message}
            onClick={props.onConfirm}
            />,
           document.getElementById('overlay-root') 

        )}
        
    </React.Fragment>) 

};

export default ErrorModel;