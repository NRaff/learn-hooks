import './App.css';
import React, { useEffect, useReducer, useState } from "react";
import { FaStar } from "react-icons/fa"



function App() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  )
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

export default App;
