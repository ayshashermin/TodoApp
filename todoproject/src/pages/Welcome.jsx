import React from 'react'
import './Welcome.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

function Welcome() {

  useEffect(() => {
    const timer = setTimeout(() => {
        // Redirect to the Home component after 3 seconds
        window.location.href = 'login';
    }, 3000); // 3000 milliseconds = 3 seconds
    Aos.init({duration:2000});

    return () => clearTimeout(timer); // Cleanup the timer on unmount

     
    
}, []);
  return (
    <div className='welcome'>
        <div className='container-welcome'>
            <span className='w1'>Welcome to</span>
            <span className='w2'>Todo App</span>
        </div>

    </div>
  )
}

export default Welcome