import React from 'react'
import '../pages/Login.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../apifetch/fetchApi';


const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const loginForm = (e) => {
    e.preventDefault(); 
    const { username, password } = login;

    if (!username || !password) {
      toast("Invalid input");
    } else {
      userLogin(login).then((res) => {
        console.log(res.data);
        
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("is_admin", res.data.is_admin); 

        toast("Login successful");

       
        if (res.data.is_admin) {
          navigate("/home"); 
        } else {
          navigate("/userhome"); 
        }
      }).catch((err) => {
        console.error(err);
        toast("Login failed");
      });
    }
  };

     useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div>
        
        <div className="containers" data-aos="zoom-in-right">
            <div className="heading">Login In</div>
            <form action="" className='form'>
                <input required="" className='input' type='text' id="username" placeholder='Username'onChange={(e) => setLogin({ ...login, username: e.target.value })}/>
                 <input required="" class="input" type="password" name="password" id="password" placeholder="Password" onChange={(e) => setLogin({ ...login, password: e.target.value })}/>
                  <button className="login-button" onClick={loginForm}>Sign Up</button>
                  <span className="forgot-password"><a href="reg ">New sign Up ?</a></span>
            </form>
        </div>
        
      

    </div>
  )
}

export default Login