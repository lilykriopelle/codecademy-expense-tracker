import React from 'react';
import Transaction from './Transaction';

export default function TransactionList({transactions}) {
  return (
    <ul>
        { transactions.map(t => <Transaction transaction={t} />) }
    </ul>
  );
}
