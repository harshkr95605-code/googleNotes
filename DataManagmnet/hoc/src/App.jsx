import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Red from './components/Red'
import MessageBox from './components/MessageBox'
import useInternetStatus from './hooks/useInternetStatus'

function App() {
  const [count, setCount] = useState(0)
  const internetConnected = useInternetStatus();
  return (
    <>
    {/* //HOCs */}
      {/* <Red color="red">
        <h1>Welcome to React Data Management!</h1>
      </Red>
      <Red>
        <button>Click Me</button>
      </Red>
      <Red >
        <h2>Heading</h2>
        <h3>Another Heading</h3>
      </Red>
       */}

       {/* Render function */}

       {/* <h1>Render function example.</h1>
       <MessageBox>
        {(isHappy)=>(
          <p>{isHappy ? 'I am happy!' : 'I am sad!'}</p>
        )}
       </MessageBox> */}
       <h1>
        {internetConnected ? 'Internet Connetced' : 'No Connection'};
       </h1>
    </>
  )
}

export default App
