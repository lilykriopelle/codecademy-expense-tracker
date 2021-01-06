import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactions/transactionsSlice';

export default function Transaction({transaction}) {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteTransaction(transaction))
  }

  return (
    <li>
      {transaction.amount} – {transaction.category} ({transaction.description})
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}
