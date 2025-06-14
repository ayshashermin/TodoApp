import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Footer from './pages/Footer'
import { ToastContainer } from 'react-toastify';
import Welcome from './pages/Welcome'
import UserHome from './pages/user page/UserHome'
import Login from './pages/Login'
import Register from './pages/Register'
import SideBar from './pages/SideBar'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard'
import First from './pages/First'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='header' element={<Header/>}/>
        <Route path='/' element={<Welcome/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='userhome' element={<UserHome/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reg' element={<Register/>}/>
        <Route path='side' element={<SideBar/>}/>
        <Route path='dash' element={<Dashboard/>}/>
        <Route path='first' element={<First/>}/>

      </Routes>
      <ToastContainer position="top-right" autoClose={2000}/>
    </>
  )
}

export default App
