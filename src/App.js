// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
// import ExpenseDate from './components/ExpenseDate';
import Expense from './components/Expense';


function App() {
  let expense = [{
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
  return (
    <div className="App">
      <h1>Let's start</h1>
        {/* <ExpenseDate/> */}
        <Expense item = { expense }/>
        
        
    </div>
  );
}

export default App;
