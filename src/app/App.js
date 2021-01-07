import './App.css';
import Transactions from '../features/transactions/Transactions'
import Budgets from '../features/budgets/Budgets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        EXPENSE TRACKER
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
