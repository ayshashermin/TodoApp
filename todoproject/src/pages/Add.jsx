import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addNewTodo } from '../apifetch/fetchApi';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../pages/add.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Add = ({onTodoAdded}) => {

  const [addTodo,setAddTodo]=useState({
    Title:"",description:""
  })
  console.log(addTodo);

  const navigate=useNavigate()

   const saveData=()=>{
    const {Title,description}=addTodo
    if(!Title || !description){
        toast("invalid input")
    }
    else{
      const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"application/json"
      }
        addNewTodo(addTodo,header).then((res)=>{
            console.log(res);
            toast("Todo added")
            handleClose()
             console.log("Todo added, calling onTodoAdded");
             if (onTodoAdded) onTodoAdded(); 
        })
    }
        
  }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
        
<button class="cssbuttons-io-button mt-5" onClick={handleShow} style={{"marginLeft":"1100px"}}  data-aos="zoom-in">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
  </svg>
  <span>Add Todo </span>
</button>



        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <FloatingLabel controlId="floatingTitle"label="Title"className="mb-3">
        <Form.Control type="text" placeholder="Title1"  onChange={(e)=>{setAddTodo({...addTodo,Title:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingContent" label="Description">
        <Form.Control type="text" placeholder="content1" onChange={(e)=>{setAddTodo({...addTodo,description:e.target.value})}}/>
      </FloatingLabel>   
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Add