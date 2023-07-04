import React, { useState } from 'react'
// import {Button} from 'react-bootstrap';
import { Button } from '@mui/material';
import {Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  UserLogin } from '../redux/Actions/Actions';
import { useNavigate,Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


const Login = () => {
  const [state, setState] = useState({
    mobile:"",
    password:"",
    udid:"test",
    fcm_token:"test",
  });
  const {mobile,password} = state;

 

  let dispatch = useDispatch();
  let navigate = useNavigate();


  const handleInput=(e)=>{
 
    setState({...state,[e.target.name]:e.target.value})
  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(UserLogin(state));  
    
    
    if(sessionStorage.getItem('token')){
     
    navigate('/Home')
   
    }else {
      navigate('/Login')
    }
    
  }

  return (
    <div>
      <ul className='Nav'>
        <li className='touch'><h3>TOUCH</h3></li>
        <li className='Reg'><Link to = '/Register'>Register</Link></li>
        <li className='Login'><Link to = '/Login'>Login</Link></li>
      </ul> 
        {/* <h1>LOGIN</h1> */}
        <Typography variant='h1' align='center'  >LOGIN</Typography>
        <Form className='Regform' onSubmit={handleSubmit}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="mobile" placeholder="mobile" value={mobile} name="mobile" required onChange={handleInput}  />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" value={password} name="password" required onChange={handleInput} />
    </Form.Group>
    <Button variant="contained" type="submit" color='success' size='large'>
      Login
    </Button>
    </Form>
    </div>

  )
}

export default Login