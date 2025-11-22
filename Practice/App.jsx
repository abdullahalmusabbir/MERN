import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import STATE from './components/STATE.jsx'
import Log from './components/Conditional_rendering/log.jsx'
import EventHandlerClasss from './components/event_handler_classs/event.jsx'
import EventBinding from './components/Event_binding/binding.jsx';
import EventHookClasss from './components/Hook/useState/hook.jsx';
import EventHookClasss2 from './components/Hook/useState/hook2.jsx';
import Bubbling from './components/Event_bubbling/bubbling.jsx';
import FORM from './components/FORM/FORM.jsx';
import Home from './components/STATE_LIFTING/Home.jsx';
import Toggle from './components/Toggle/toggle.jsx'
import UseEffectExample from './components/Hook/userEffect/useEffectExample.jsx';
import DataFetch from './components/Hook/userEffect/dataFetch.jsx'  

// Importing assets
import bgImage from './assets/bg.png';
import plusIcon from './assets/plus_Icon.png';

import { FaFacebook,FaYoutube } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  const handleChileData = (data) => {
    console.log("Data received from child:", data);
  }

  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-3 justify-center mt-10 items-center w-full h-400 bg-gray-200">
          <Card number="01944145084"/>
          <Card number="01944145085"/>
          <Card number="01944145086"/>
          <Card number="01944145087"/>
          <Card number="01944145088"/>
          <Card number="01944145089"/>
          <span><FaFacebook className="text-black text-center self-center"/></span>
          <span><FaYoutube className="text-black text-center self-center"/></span>
          <STATE />
          <Log />
          <EventHandlerClasss />
          <EventBinding />
          <EventHookClasss />
          <EventHookClasss2 />
          <Bubbling />
          <Home />
          <Toggle />
          <UseEffectExample />
          <DataFetch />
        </div>
        <div className="w-screen min-h-screen  flex justify-center items-center">
          <FORM />
        </div>

        <div>
           <div className="h-screen bg-red-200 flex justify-center items-center">
            <div className="card relative h-[500px] w-[500px] bg-white rounded-[50px] px-10 py-20 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
              <div className="h-full flex flex-col justify-between">
                <p className="font-medium">Audio Descriptions</p>
                <h1 className="text-5xl font-bold">
                  Descriptions that really make a scene.
                </h1>
                <p className="text-sm">
                  In publishing and graphic design, Lorem ipsum is a placeholder text
                  commonly used to demonstrate the visual form of a document or a
                  typeface without relying on meaningful content. Lorem ipsum may be
                  used as a placeholder before final copy is available.
                </p>
              </div>

              <div className="bg-white absolute right-10 bottom-10 rounded-full p-2 cursor-pointer">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </>
  )
}

export default App
