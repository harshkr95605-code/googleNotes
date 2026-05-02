import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function MainLayout() {
  return (
    <>
    <nav style={{padding:10,display:"flex",gap:10}}>
        <Link to="/">Home</Link>
         <Link to="/favourites">Favourites</Link>
          <Link to="/login">Login</Link>
<Outlet/>
    </nav>
    </>
  );
}

export default MainLayout
