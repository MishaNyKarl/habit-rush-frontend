import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => setMessage(data))
      .then(err => console.error(err));
  }, [])

  return (
    <div>
      <h1>HabitRush</h1>
      <p>{message}</p>
    </div>  
  )
}

export default App
