import React from 'react'
import './Home.css'
import { useState } from 'react';
import { logoutApi } from '../apifetch/fetchApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navigate=useNavigate()

  const handleLogout = () => {
  const header = {
    Authorization: `Token ${sessionStorage.getItem('token')}`
  };

  logoutApi(header)
    .then((res) => {
      sessionStorage.clear();
      toast.success("Logged out successfully");
      navigate('/login');
    })
    .catch((err) => {
      toast.error("Logout failed");
      console.error("Logout error:", err);
    });
};
  return (
    <div>
       <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar