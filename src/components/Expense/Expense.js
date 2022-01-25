import './Expense.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense =(props)=>{

    return (
        <Card className='expenses'>
        {
            props.item.map(expense => (
                <ExpenseItem date = { expense.date } title = { expense.title } amount = { expense.amount }/>
            ))
        }
        
        </Card>
    )
}
export default Expense;