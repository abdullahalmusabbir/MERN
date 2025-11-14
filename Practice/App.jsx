import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import STATE from './components/STATE.jsx'
import Log from './components/Conditional_rendering/log.jsx'

import { FaFacebook,FaYoutube } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-3 gap-3 justify-center mt-10 items-center w-full h-100 bg-gray-200">
        <Card number="01944145084"/>
        <Card number="01944145085"/>
        <Card number="01944145086"/>
        <Card number="01944145087"/>
        <Card number="01944145088"/>
        <Card number="01944145089"/>
        <span><FaFacebook className="text-black text-center self-center"/></span>
        <span><FaYoutube className="text-black text-center self-center"/></span>
        <STATE />
      </div>
      
    </>
  )
}

export default App
