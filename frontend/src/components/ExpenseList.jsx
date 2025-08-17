import { useEffect, useState } from 'react'
import { fetchExpenses, deleteExpense } from '../services/api'

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const getExpenses = async () => {
      const data = await fetchExpenses()
      setExpenses(data)
    }
    getExpenses()
  }, [expenses])

  const handleDelete = async (id) => {
    await deleteExpense(id)
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div>
      <h2 style={{marginTop:"20px", marginBottom:"10px"}}>Expense List</h2>
      {expenses.map((expense) => (
        <p key={expense.id} style={{margin:"0px"}}>
          {expense.description} - Rs. {expense.amount} on{' '}
          {new Date(expense.date).toLocaleDateString()}
          <button className="delete-btn" onClick={() => handleDelete(expense.id)}>Delete</button>
        </p>
      ))}
    </div>
  )
}

export default ExpenseList
