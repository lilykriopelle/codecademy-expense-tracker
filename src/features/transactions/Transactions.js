import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';

const Transactions = () => {
  const transactions = useSelector(selectFlattenedTransactions);
  return (
    <div className='comments-container'>
      <TransactionForm />
      <TransactionList transactions={transactions}/>
    </div>
  );
};

export default Transactions;
