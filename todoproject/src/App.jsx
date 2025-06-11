import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Footer from './pages/Footer'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='header' element={<Header/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
