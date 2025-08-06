"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Transaction,TransactionsContextType } from '../types';

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

const sampleData: Transaction[] = [
  { id: 1, date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
  { id: 2, date: '2023-10-02', remark: 'Groceries', amount: -150, currency: 'USD', type: 'Debit' },
  { id: 3, date: '2023-10-03', remark: 'Gym Membership', amount: -50, currency: 'USD', type: 'Debit' },
  { id: 4, date: '2023-10-04', remark: 'Dinner', amount: -40, currency: 'USD', type: 'Debit' },
  { id: 5, date: '2023-10-05', remark: 'Movie Tickets', amount: -30, currency: 'USD', type: 'Debit' },
  { id: 6, date: '2023-10-06', remark: 'Rent', amount: -1200, currency: 'USD', type: 'Debit' },
  { id: 7, date: '2023-10-07', remark: 'Utilities', amount: -100, currency: 'USD', type: 'Debit' },
  { id: 8, date: '2023-10-08', remark: 'Car Payment', amount: -400, currency: 'USD', type: 'Debit' },
  { id: 9, date: '2023-10-09', remark: 'Insurance', amount: -200, currency: 'USD', type: 'Debit' },
];

export const TransactionsProvider: React.FC<{children:ReactNode}> = ({ children }) => {
  const [allTransactions,setAllTransactions] = useState<Transaction[]>(sampleData);
  const [transactions, setTransactions] = useState<Transaction[]>(sampleData);
  const [searchQuery, setSearchQuery] = useState('');

  const filterTransactions = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setTransactions(allTransactions);
      return;
    }

    console.log("Search query:", query);
    const filtered = allTransactions.filter((transaction) => {
      const searchTerm = query.toLowerCase();
      return (
        transaction.remark.toLowerCase().includes(searchTerm) ||
        transaction.date.includes(searchTerm) ||
        transaction.amount.toString().includes(searchTerm) ||
        transaction.currency.toLowerCase().includes(searchTerm) ||
        transaction.type.toLowerCase().includes(searchTerm)
      );
    });
    console.log("Filtered transactions:", filtered);

    setTransactions(filtered);
  };

  const value: TransactionsContextType = {
    transactions,
    allTransactions,
    setTransactions,
    searchQuery,
    setSearchQuery,
    filterTransactions,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): TransactionsContextType => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }
  return context;
};
