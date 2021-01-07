import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBudget } from '../features/budgets/budgetsSlice';
import { selectTransactionsByCategory } from '../features/transactions/transactionsSlice';

export default function Budget({budget}) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(budget.amount);
  const transactions = useSelector(selectTransactionsByCategory)

  const handleEdit = e => {
    e.preventDefault()
    dispatch(editBudget({category: budget.category, amount: amount}))
  }

  const calculateTotalExpenses = () => {
    return transactions[budget.category]
      .map(transaction => transaction.amount)
      .reduce((amount1, amount2) => amount1 + amount2, 0)
  }

  return (
    <li className="budget-container">
      Category: {budget.category}
      <form onSubmit={handleEdit} className="budget-form">
        <input value={amount} onChange={e => setAmount(e.currentTarget.value)} type='number' step='0.01'/>
        <button>Update Budget</button>
      </form>
      <div>Funds Remaining: {budget.amount - calculateTotalExpenses()}</div>
    </li>
  );
}
