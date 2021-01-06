import './App.css';
import Transactions from '../features/transactions/Transactions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        EXPENSE TRACKER
        <Transactions />
      </header>
    </div>
  );
}

export default App;
