import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'

class App extends React.Component{
 constructor(){
  super() //use to get the refernce as parent container
  this.state = {posts:[]};
 }
 componentDidMount(){
  fetch('https://dummyjson.com/posts')
  .then((res)=>res.json())
  .then((resp)=>{
    this.setState({posts:resp.posts});
    console.log(resp.posts);
  })
 }
 render(){
  return(
    <div>
      <h1>POsts</h1>
       <ol>
      {this.state.posts.map(post=>{
       <li key={post.id}>{post.title}</li>

      })}
      </ol>
    </div>
  )
 }
}


export default App

