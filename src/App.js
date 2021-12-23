import './App.css';
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"



function App() {
  const [name, setName] = useState("Nick")
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    console.log(`Celebrate ${name}`)
  }, [name])

  useEffect(() => {
    console.log(
      `The user is: ${
        admin ? "admin" : "not admin"
      }.`
    )
  },[admin])

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button
        onClick={() => setName("Will")}
      >Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button
        onClick={() => setAdmin(true)}
      >Log in</button>
    </section>
  )
}

export default App;
