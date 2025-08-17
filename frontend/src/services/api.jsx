import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses`)
    return response.data
  } catch (error) {
    console.error('Error fetching expenses: ', error)
    throw error
  }
}

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(`${API_URL}/expenses`, expense)
    return response.data
  } catch (error) {
    console.error('Error adding expense: ', error)
    throw error
  }
}

export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_URL}/expenses/${id}`)
  } catch (error) {
    console.error('Error deleting expense: ', error)
    throw error
  }
}
