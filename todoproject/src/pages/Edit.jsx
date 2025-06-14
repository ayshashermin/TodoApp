import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getTodo } from '../apifetch/fetchApi';
import { editTodo } from '../apifetch/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../pages/Edit.css'
import Header from './Header';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Edit = () => {

  const [todo,setTodo]=useState({
    Title:"",description:""
  })
   
  const header={
    "Authorization":`Token ${sessionStorage.getItem('token')}`,
    "Content-Type":"application/json"
  }

     const{id}=useParams()

    const navigate=useNavigate()

     useEffect(()=>{
      getTodo(id,header).then((res)=>{
        console.log(res);
        setTodo(res.data)
         Aos.init({duration:1000})
      })
     },[])

    const updateTodo=()=>{
        const {Title,description}=todo
            if(!Title || !description){
                toast("invalid input")

        }
        else{
            editTodo(id,todo,header).then((res)=>{
                console.log(res);
            })
            toast("todo data updated")
            navigate('/userhome')
        }
    }
    

  return (
    <div>
      <Header/>
        <div class="contain" data-aos="fade-down">
  <div class="login-card">
    <div class="login-card-header">
      <h2>Edit Todo</h2>
    </div>
    <div class="login-card-body">
      <form>
        <div class="form-group">
          <label for="username">Title</label>
          <input type="text" id="Title" name="Title" required onChange={(e)=>(setTodo({...todo,Title:e.target.value}))}  value={todo.Title}/>
        </div>
        <div class="form-group">
          <label for="username">Description</label>
          <textarea
        className="mt-1 p-2 w-full border rounded-md"
        rows="3"
        name="Description"
        id="Description"
        onChange={(e)=>(setTodo({...todo,description:e.target.value}))}  value={todo.description}
      ></textarea>
        </div>
        <button type="submit" class="login-btn" onClick={updateTodo}>Update</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Edit