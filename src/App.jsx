import { useState } from 'react'
import './App.css'
import Popup from './components/Popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Popup />
    </div>
  )
}

export default App
