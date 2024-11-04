import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './component/Homepage'


function App() {
  const [count, setCount] = useState(0)

  function Header() {
    return (
      <div>
        <h1>Belajar React</h1>
      </div>
    )
  }
  function Header3(props){
    return (
      <div>
        <h3>Belajar javascript hari {props.name} belajar {props.belajar}</h3>
      </div>
    )
  }

  return (
    <>
    <Header/>
    <Header3 name="pertama" belajar="dasar 1"/>
    <Header3 name="kedua" belajar="react"/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Belajar Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Homepage/>
    </>
  )
}

export default App
