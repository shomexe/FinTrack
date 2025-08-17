import { useEffect, useState } from 'react'
import { fetchExpenses } from '../services/api'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Dashboard = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const loadExpenses = async () => {
      const data = await fetchExpenses()
      setExpenses(data)
    }
    loadExpenses()
  }, [])

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  return (
    <div>
      <h1 style={{marginBottom:"0px"}}>Financial Overview</h1>
      --------------------------------------------------
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Dashboard
