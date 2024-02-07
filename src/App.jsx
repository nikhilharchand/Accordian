import { useState } from 'react'
import Accordian from './accordian'
import Navbar from "./navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Accordian/>
    </>
  )
}

export default App
