import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login name='hello'/>}/>
        <Route path='/' element={<Home name='Home'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
