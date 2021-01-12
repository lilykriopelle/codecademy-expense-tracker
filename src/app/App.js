import './App.css';
import Transactions from '../features/transactions/Transactions'
import Budgets from '../features/budgets/Budgets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXPENSE TRACKER</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
