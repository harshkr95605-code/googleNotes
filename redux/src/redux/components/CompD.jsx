import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { increment } from '../feature/counterSlice'
import { login } from "../feature/authSlice"
import { logout } from "../feature/authSlice"
function CompD() {
     const count = useSelector(state => state.counter.value)
     const auth = useSelector(state => state.auth.isLoggedIn);
     const dispatch = useDispatch();
     function handleAuth(){
    //    if(auth===false){
    //     dispatch(login());
    //    }
    //    else{
    //     dispatch(logout());
    //    }
       dispatch(auth ? logout() : login());
     }
  return (
   
    <div>
      <p>Count: {count}</p>
      <p>isLoggedIn : {auth.toString()}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={handleAuth}>
        {auth ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default CompD
