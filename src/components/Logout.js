import { Alert, Button, Typography } from '@mui/material'
import React from 'react'
import {Dialog,DialogTitle,DialogContentText,DialogContent,DialogActions} from '@mui/material';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();
    const clearStorage = () => {
      sessionStorage.clear("token");
  
      navigate("/Login");
    };
  return (
    <div className='logout'>
       <Typography variant='h3' textAlign='center' justifyContent='center' paddingTop='50px'>LOGOUT</Typography>
       <Typography variant='h4' textAlign='center' justifyContent='center' paddingTop='50px'>Are you sure?</Typography>
       <div className='logoutButtons'>
        <Button onClick={clearStorage} id='but' variant='outlined' color='success' size='large' sx={{fontSize:'20px'}} >Yes</Button>
       <Button onClick={()=>navigate("/Home")} variant='outlined' color='error' size='large' sx={{fontSize:'20px'}}>No</Button>
       </div>
       
    </div>
  )
}

export default Logout;