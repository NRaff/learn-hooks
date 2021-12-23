import './App.css';
import React, { useEffect, useReducer, useState, useRef } from "react";
import { FaStar } from "react-icons/fa"

function App() {
  const sound = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value
    const colorVal = color.current.value
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = ""
    color.current.value = ""
  }
  return (
    <form onSubmit={submit}>
      <input ref={sound} type="text" placeholder='Sound...'/>
      <input ref={color} type="color" />
      <button>ADD</button>
    </form>
  )
}

export default App;
