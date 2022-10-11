import './App.css';
import Expenses from './Components/Expenses';

function App() {
  const Expense = [
    {
      date: new Date(),
      title: 'Car Expense',
      amount: 200
    },
    {
      date: new Date(2022, 9, 7),
      title: 'Food Expense',
      amount: 300
    },
    {
      date: new Date(2022, 9, 1),
      title: 'Home Expense',
      amount: 500
    },
    {
      date: new Date(2022, 9, 1),
      title: 'Fuel Expense',
      amount: 100
    }
  ];
  return (
    <div className="App">
      <h2 className="App-header">Expenses List:</h2>
      <div className='App-body'>
        <Expenses
          title={Expense[0].title}
          date={Expense[0].date}
          amount={Expense[0].amount} >
        </Expenses>
        <Expenses
          title={Expense[1].title}
          date={Expense[1].date}
          amount={Expense[1].amount} >
        </Expenses>
        <Expenses
          title={Expense[2].title}
          date={Expense[2].date}
          amount={Expense[2].amount} >
        </Expenses>
        <Expenses
          title={Expense[3].title}
          date={Expense[3].date}
          amount={Expense[3].amount} >
        </Expenses>
      </div>
    </div>
  );
}

export default App;
