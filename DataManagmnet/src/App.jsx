import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child1 from './components/Child1'
import { contextMain } from './context'
import ChildA from './components/ChildA'
function App() {
  const [count, setCount] = useState(0)
  const data = 'Child 5 data'
  return (
    <>
    {/* <Child1 data={data}/> */}
    <contextMain.Provider value={data}>
      <ChildA/>
    </contextMain.Provider>
    </>
  )
}

export default App
