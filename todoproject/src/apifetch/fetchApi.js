import commonApi from "./commonApi";

 export  const getAllTodo=()=>{
    return commonApi('http://127.0.0.1:8000/todoapp/','GET','')
 }

 export  const addNewTodo=(data)=>{
    return commonApi('http://127.0.0.1:8000/todoapp/','POST',data)
 }

 
 export const getTodo=(id)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,'GET','')
 }

 export const editTodo=(id,data)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,'PUT',data)

 }

 export const deletetodo=(id)=>{
   return commonApi(`http://127.0.0.1:8000/todoapp/${id}/`,"DELETE",'')
 }

