import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://kiranyele.com/course" target="_blank">
          <img src={viteLogo} className="logo" alt="logo" />
        </a>
        
      </div>
      <h1>Trading Course By Kiran Yele</h1>
      <div className="card">
        <button> Buy Now
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        Don't Buy This Course For Making Money. <br />Buy For Educational Purpose Only.
      </p>
    </>
  )
}

export default App
