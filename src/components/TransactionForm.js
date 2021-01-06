import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, CATEGORIES } from '../features/transactions/transactionsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TransactionForm({categories}) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTransaction({category: category, description: description, amount: amount, id: uuidv4()}))
    setCategory(null)
    setDescription('')
    setAmount(0)
  }

  return (
    <>
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label for='category'>Category</label>
        <select id='category' value={category} onChange={e => setCategory(e.currentTarget.value)}>
          <option value="" selected disabled hidden></option>
          { CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <label for='description'>Description</label>
        <input id='description' value={description} onChange={e => setDescription(e.currentTarget.value)} type='text'/>

        <label for='amount'>Amount</label>
        <input id='amount' value={amount} onChange={e => setAmount(e.currentTarget.value)} type='number' step='0.01'/>

        <button>Publish</button>
      </form>
    </>
  );
}