import './App.css';
import React, { useEffect, useReducer, useState } from "react";
import { FaStar } from "react-icons/fa"

const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      } 
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      }
    default:
      return {
        message: "hi"
      }
  }
}


function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>yell</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
    </>
  )
}

export default App;
