import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { Typography } from '@mui/material';

const Display = () => {
  return (
    <div className='Display'>
      <ul className='Nav'>
    <li className='touch'><h3>TOUCH</h3></li>
    <li className='Reg'><Link to = '/Register'>Register</Link></li>
    <li className='Login'><Link to = '/Login'>Login</Link></li>
  </ul>
   
   <Typography paddingTop='10%' variant='h3' align='center'> WELCOME TO TOUCH WORLD!!!</Typography>
   
  </div>
  )
}

export default Display;