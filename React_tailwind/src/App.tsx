import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-white">
        Hola Mundo!
      </h1>

      <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img src="src/chat.svg" alt="ChitChat Logo" className="h-12 w-12" />
        </div>
        <div>
          <div className="text-xl font-bold text-black">ChitChat</div>
          <p className="text-slate-500">Tiene Mensajes</p>
        </div>
      </div>

    </div>
  )
}

export default App
