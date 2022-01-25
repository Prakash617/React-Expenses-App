// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
// import ExpenseDate from './components/ExpenseDate';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  let  dummy_expense = [{
    id : '1',
    title : 'school',
    amount : 250,
    date : new Date(2022,2,12)
  },
  {
    id : '2',
    title : 'collage',
    amount : 600,
    date : new Date(2024,2,12)
  },
  {
    id : '3',
    title : 'tu',
    amount : 23,
    date : new Date(2032,2,12)
  },
  {
    id : '4',
    title : 'any',
    amount : 24,
    date : new Date(2032,2,12)
  }
]

const [expenses,setExpenses] = useState(dummy_expense); //initialize with dummy_expense.
const addExpenseHandler = (expense)=>{
  const updatedExpense = [expense, ...expenses]
  setExpenses(updatedExpense);

    

}
  return (
    <div className="App">
      <h1>Let's start</h1>
        {/* <ExpenseDate/> */}
        <NewExpense onAddExpense= { addExpenseHandler }/>
        <Expense item = { expenses }/>
        
        
    </div>
  );
}

// function fetchData(){
//   fetch('https://techgun.website/sample/api/read.php').then(
//       response => {
//           return response.json();
//       }
//   ).then(
//       data => {
//           //console.log(data);
//           setExpenses(data);
//       }
//   );
// }

// useEffect(()=>{     // UseEffect is used to stop infinite calling loop..
//   fetchData();
// },[]);               // In this list variable is add to repeat call.

export default App;
