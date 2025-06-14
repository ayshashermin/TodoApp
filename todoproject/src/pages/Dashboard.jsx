import React from 'react'
import { DashboardCount } from '../apifetch/fetchApi'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import '../pages/Dashboard.css'

const Dashboard = () => {

   const [totalCount, setTotalCount] = useState(0);

  const header = {
    Authorization: `Token ${sessionStorage.getItem('token')}`,
    "Content-Type": "application/json"
  };

  useEffect(() => {
    DashboardCount(header)
      .then((res) => {
        setTotalCount(res.data.total_todo_count);
      })
      .catch((err) => {
        toast.error("Failed to fetch dashboard data");
        console.error(err);
      });
  }, []);

  return (
    <div>
        <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">Total Todos</div>
        <div className="dashboard-body">
          <h3 className="dashboard-count">{totalCount}</h3>
          <p className="dashboard-text">Tasks created in the system</p>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Dashboard