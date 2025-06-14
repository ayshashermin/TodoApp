import React from 'react'
import '../pages/Header.css'
import { logoutApi } from '../apifetch/fetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate=useNavigate()
  const handleLogout = () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    toast.error("You're already logged out.");
    return;
  }

  logoutApi({
    Authorization: `Token ${token}`,
  })
    .then(() => {
      sessionStorage.clear();
      toast.success('Logged out successfully');
      navigate('/login');
    })
    .catch((err) => {
      toast.error("Logout failed. Please login again.");
      console.error("Logout error:", err);
    });
};
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-brand">📝 To-Do App</div>
      <button className="lo" onClick={handleLogout}>
        Logout
      </button>
    </nav>
    </div>
  )
}

export default Header