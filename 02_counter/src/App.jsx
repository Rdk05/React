import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  const resetValue = () => {
    setCount(0);
  }

  return (
    <>
      <h1>Varma@1234</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset value</button>
    </>
  )
}

export default App
