import React from 'react'
import '../pages/Login.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { userRegister } from '../apifetch/fetchApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [todo,setTodo]=useState({
  username:"",email:"",password:""
})

const navigate=useNavigate()

const formSubmit = (e) => {
  e.preventDefault(); // ✅ Prevent form reload

  const { username, email, password } = todo;

  if (!username || !email || !password) {
    toast("Invalid input");
  } else {
    userRegister(todo)
      .then((res) => {
        console.log(res.data);
        toast("Registration successful");
        navigate("/login"); // ✅ Now this will work
      })
      .catch((err) => {
        console.log(err);
        toast("User already exists");
      });
  }
};



     useEffect(()=>{
            Aos.init({duration:2000})
          },[])
  return (
    <div>
        
        <div className="containers" data-aos="zoom-in-left">
            <div className="heading">Sign Up</div>
            <form action="" className='form'>
                <input required="" className='input' type='text' id="username" placeholder='Username' onChange={(e)=>{setTodo({...todo,username:e.target.value})}}/>
                 <input required="" class="input" type="email" name="email" id="email" placeholder="Email"  onChange={(e)=>{setTodo({...todo,email:e.target.value})}}/>
                 <input required="" class="input" type="password" name="password" id="password" placeholder="Password"  onChange={(e)=>{setTodo({...todo,password:e.target.value})}}/>
                  
                <input className="login-button" type="submit" value="Sign Up" onClick={(e) => formSubmit(e)}/>
            </form>
        </div>

    </div>
  )
}

export default Register