import React , { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [newtitle, setNewTitle] = useState(''); 

    let [title, setTitle] = useState(props.title); //this helps to set the variable of title .
    
    const clickHandler = ()=>{
        
        setTitle(newtitle);
    }

    const changeHandler = (event)=>{
        setNewTitle(event.target.value);
    }

    
    return(

        <Card  className="expense-item">
            <ExpenseDate date = { props.date} />
            
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
            </div>
            <input type='text' value = { newtitle } onChange={ changeHandler }></input>
            <button onClick={ clickHandler }>Change Title</button>
        </Card>
    )

}
export default ExpenseItem;