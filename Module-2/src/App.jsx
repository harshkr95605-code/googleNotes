import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
 import React from 'react'
  
           //cHARCHETR COUNT
     
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {count:0}
//   }
//   Increment=()=>{
//      this.setState({count:this.state.count+1})
//   }
//   render(){
//     return(
//       <div>
//         <h1>Welcome to the class based component</h1>
//         <p>Clicked{this.state.count} times</p>
//         <button onClick={this.Increment}>Click Me</button>
//       </div>
//     )
//   }
// }
 

   //CHARACTER PARAGRAPH COUNT.......

  //  class App extends React.Component{
  //   constructor(props){
  //     super(props);
  //     this.state={
  //       text:""
  //     }
  //   }
  //   handleChange=(e)=>{
  //     this.setState({text:e.target.value})

  //   }
  //   render(){
  //     const text = this.state.text;
  //     const charcount = text.length;
  //     return(
  //       <div>
  //         <h2>Character Count.</h2>
  //         <textarea
  //          placeholder="Type your post here..." 
  //          value={text} 
  //          onChange={this.handleChange}
  //          ></textarea>
  //          <p>Character Count:{charcount}</p>
  //       </div>
  //     )
  //   }
  //  }
    
          //BUTTON LIKE DISLIKE
     
    class App extends React.Component{
     constructor(){
      super()
      this.state = {
        isToggle: false,
      }
     }
     handleToggle=()=>{
      this.setState((prevState)=>({
        isToggle:!prevState.isToggle
      }));
     }
     render(){
      const isToggle = this.state.isToggle;//or const isToggle = {isToggle} = this.state
     return(
      <div>
        <button onClick={this.handleToggle} style={{
           marginTop:"80px",
          padding:"10px",
          fontSize:"16px",
          backgroundColor:isToggle ? "green": "red",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer",

        }}
        >
          {isToggle ? "Off" :  "On"}
        </button>
      </div>
     )
     }
    }     



        // States with Functional Components i.e HOOKs.

        // function App(){
        //   const [count,setCount] = useState(0); //its a hook because it uses use

        //   function inc(){
        //      setCount(count + 1);
        //   }

        //   function dec(){
        //       setCount(count - 1);   
        //   }
        //   return(
        //     <div>
        //       <button onClick={inc}>Increment</button>
        //       <button onClick={dec}>Decrement</button>
        //       {count}
        //     </div>
        //   )
        // }

           
export default App
