import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Home.css'
import { useEffect } from 'react';
import { getAllTodo } from '../apifetch/fetchApi';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deletetodo } from '../apifetch/fetchApi';


const Home = () => {

    const [todo,setTodo]=useState([])

  const navigate=useNavigate()



  useEffect(()=>{
    getAllTodo().then((result)=>{
      console.log(result);
      setTodo(result.data)
      
    })

  },[])
  console.log(todo);

   const deleteTodos=(id)=>{
    console.log(id);
    deletetodo(id).then((res)=>{
      console.log(res);
    })
    toast("todo deleted")
    navigate("/")
    

  }

  
  

  return (
    <div>
         <Header/>
       
    <Container>
       <h1 className='text-center mt-5 'style={{'textShadow':'2px 2px 2px black'}}>TODO LIST</h1>
    
      <Row>
        <Col md={12}>
        
        <table className='table table-bordered table-hover table-striped table-info mt-5'>
          <thead>
            <tr>
                <th>ID</th>
                <th>Tasks</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
                
                
            </tr>
            </thead>
            <tbody className='mt-4'>
              {
                todo.length >0 ?
                todo.map((stud)=>(
                  
                  <tr>
                      <td>{stud.id}</td>
                      <td>{stud.Title}</td>
                      <td>{stud.description}</td>
                      <td>{stud.date}</td>
                
                      <td><Link to={`edit/${stud.id}`} className='btn btn-outline-warning'>Edit</Link> 
                      <button class="btn btn-outline-danger" onClick={()=>(deleteTodos(`${stud.id}`))} style={{"marginLeft":"10px"}}>delete</button >
 
</td>
                 </tr>
                 


                 ))
                : <h1>no todos</h1>
              } 
             </tbody>



           
        </table>
        
        </Col>
      </Row>
    </Container>

      <Footer/>
    </div>
  )
}


export default Home