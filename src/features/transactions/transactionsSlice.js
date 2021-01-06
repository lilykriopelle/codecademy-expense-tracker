import { createSlice } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload)
    },
    deleteTransaction: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex(transaction => transaction.id === id)
      state.splice(index, 1)
    },
  }
});

export const selectTransactions = (state) => state.transactions;
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
export const { addTransaction, deleteTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer;
