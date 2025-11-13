import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-3 gap-3 justify-center mt-10 items-center w-full h-100 bg-gray-200">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </>
  )
}

export default App
