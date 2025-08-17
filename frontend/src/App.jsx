import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  return (
    <div>
      <h1 style={{color:"blue", textDecoration:"underline"}}>Personal Finance Tracker</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<ExpenseForm />} />
        <Route path="/expenses" element={<ExpenseList />} />
      </Routes>
    </div>
  )
}

export default App
