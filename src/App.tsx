import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import 'antd/dist/antd.css'
import Test from './components/Test'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login name='hello' />} />
        <Route path='/' element={<Home/>}>
          <Route path='/post' element={<Test/>} />
          <Route path='/' element={<HomePage/>} />
        </Route>
        <Route path='/message' element={<Home/>}>
          <Route path='/message' element={<Test/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
