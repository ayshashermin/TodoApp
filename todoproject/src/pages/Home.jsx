import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import './Home.css'
import { useEffect } from 'react';
import { getAllTodo } from '../apifetch/fetchApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deletetodo } from '../apifetch/fetchApi';
import SideBar from './SideBar';
import Dashboard from './Dashboard';


const Home = () => {

  const [todo, setTodo] = useState([])

  const navigate = useNavigate()
  const header = {
    "Authorization": `Token ${sessionStorage.getItem('token')}`,
    "Content-Type": "application/json"
  }



  useEffect(() => {
    getAllTodo(header)
      .then((result) => {
        setTodo(result.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch todos. Please login again.");
        navigate('/'); // go to login
      });
  }, []);
  console.log(todo);

  const deleteTodos = (id) => {
    deletetodo(id, header)
      .then((res) => {
        toast.success("Todo deleted");
        getAllTodo(header).then((result) => setTodo(result.data)); // refresh
      })
      .catch((err) => {
        toast.error("Failed to delete todo");
        console.error("Delete error:", err);
      });
  };





  return (
    <div>


      <div className='admin-container'>
        <div className='main-content'>
          <SideBar />
          <Dashboard/>
          <div className='table-wrapper'>
            <table className='table table-bordered table-hover table-striped table-info mt-5'>
              <thead>
                <tr>
                  <th className='t1'>ID</th>
                  <th className='t1'>Name</th>
                  <th className='t1'>Tasks</th>
                  <th className='t1'>Description</th>
                  <th className='t1'>Date</th>
                  <th className='t1'>Action</th>


                </tr>
              </thead>
              <tbody className='mt-4'>
                {
                  todo.length > 0 ?
                    todo.map((stud) => (

                      <tr key={stud.id}>
                        <td>{stud.id}</td>
                        <td>{stud.user}</td>
                        <td>{stud.Title}</td>
                        <td>{stud.description}</td>
                        <td>{stud.date}</td>

                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => deleteTodos(stud.id)}
                            style={{ marginLeft: "10px" }}
                          >
                            Delete
                          </button>

                        </td>
                      </tr>



                    ))
                    : (
                      <tr>
                        <td colSpan="6" className="text-center text-danger">No todos found</td>
                      </tr>
                    )
                }
              </tbody>




            </table>
          </div>
        </div>
      </div>


    </div>
  )
}


export default Home