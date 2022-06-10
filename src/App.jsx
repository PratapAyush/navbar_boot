import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"
    style={
        {
            color:"black",
            fontWeight:"bold"
        }
    }
    
    >Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"
              style={{color:"black"}}>Inspiration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{color:"black"}}>Find Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"style={{color:"black"}}>Learn Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"style={{color:"black"}}>Hire Designer</a>
        </li>
      </ul>
    </div>
    <a class="btn btn-primary" href="#" role="button mx-2"
    style={{
        backgroundColor:"white",
        border:"none",
        color:"black"
    }}
    
    >Sign in </a>
    <button type="button" class="btn btn-danger">Sign Up</button>
  </div>
</nav>
    </div>
      
    </div>
  )
}

export default App
