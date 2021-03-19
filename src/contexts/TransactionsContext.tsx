import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type Transaction = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionFormInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionsProvidervalues = {
  transactions: Transaction[];
  saveTransaction: (transaction: TransactionFormInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsProvidervalues>(
  {} as TransactionsProvidervalues)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function saveTransaction(transaction: TransactionFormInput) {
    const response = await api.post('/transactions', transaction)
    setTransactions([...transactions, response.data.transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, saveTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}