import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h1>This is NavBar...</h1>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <Link to="/about">
      <button>About</button>
      </Link>
      <Link to="/contact">
      <button>Contact</button>
      </Link>
      <Link to="/nav">
      <button>Nav</button>
      </Link>
    </div>
  )
}

export default Nav
