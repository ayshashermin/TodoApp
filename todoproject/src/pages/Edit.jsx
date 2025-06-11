import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { getTodo } from '../apifetch/fetchApi';
import { editTodo } from '../apifetch/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Edit = () => {

  const [todo,setTodo]=useState({
    Title:"",description:""
  })


     const{id}=useParams()

    const navigate=useNavigate()

     useEffect(()=>{
      getTodo(id).then((res)=>{
        console.log(res);
        setTodo(res.data)
      })
     },[])

    const updateTodo=()=>{
        const {Title,description}=todo
            if(!Title || !description){
                toast("invalid input")

        }
        else{
            editTodo(id,todo).then((res)=>{
                console.log(res);
            })
            toast("todo data updated")
            navigate('/')
        }
    }

  return (
    <div>
        <div
  className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
 style={{"marginTop":"140px"}}>
  <h2 className="text-2xl text-sky-900 font-bold mb-6">Update Your Todo</h2>

  <form method="post" action="#">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600" htmlFor="name"
        >Task</label
      >
      <input className="mt-1 p-2 w-full border rounded-md" type="text" onChange={(e)=>(setTodo({...todo,Title:e.target.value}))}  value={todo.Title}/>
    </div>


    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600" htmlFor="bio"
        >Description</label
      >
      <textarea
        className="mt-1 p-2 w-full border rounded-md"
        rows="3"
        name="bio"
        id="bio"
        onChange={(e)=>(setTodo({...todo,description:e.target.value}))}  value={todo.description}
      ></textarea>
    </div>

    <div className="flex justify-end">
      <button
        className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit" onClick={updateTodo}>Update </button>
    </div>
  </form>
</div>
    </div>
  )
}

export default Edit