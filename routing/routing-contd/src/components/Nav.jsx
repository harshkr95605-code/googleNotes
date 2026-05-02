import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Nav() {

    const navigate = useNavigate();
    const clicked=()=>{
    navigate('/page2');
    }
  return (
    <div>
      <Link to='/page1'>Page 1</Link>
      <Link to='/page2'>Page 2</Link>
      <Link to='/page3'>Page 3</Link>
      <button onClick={clicked}>Go to page 2</button>
    </div>
  )
}

export default Nav
