export type SortColumn = 'date' | 'remark' | 'amount' | 'currency' | 'type';
export type SortDirection = 'asc' | 'desc';

export interface Transaction {
  id: number;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}
export interface TransactionsContextType {
  transactions: Transaction[];
  allTransactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;   
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterTransactions: (query: string) => void;
}