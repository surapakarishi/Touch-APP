import React, { useState } from 'react'
import {Button} from '@mui/material';
import {Form} from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../App.css'
import { AddUser } from '../redux/Actions/Actions';
import { Typography } from '@material-ui/core';

const Register = () => {
  const [state, setState] = useState({
    full_name:"",
    mobile:"",
    user_name:"",
    password:"",
    udid:"test",
    fcm_token:"test",
   
    
  });


  const {full_name,mobile,user_name,password,gender} = state;

let navigate= useNavigate();
let dispatch = useDispatch();
const handleInput=(e)=>{
 
  setState({...state,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(full_name===""||mobile===""||user_name===""||password===""||!gender){ 
    (alert("Input fields cannot be empty"))
  }else{
    dispatch(AddUser(state,navigate));
    
    
  }
}
  return (
    <div className='APP'>
      <ul className='Nav'>
        <li className='touch'><h3>TOUCH</h3></li>
        <li className='Reg'><Link to = '/Register'>Register</Link></li>
        <li className='Login'><Link to = '/Login'>Login</Link></li>
      </ul>
      <Typography variant='h1' align='center' >REGISTER</Typography>
  
    <Form className='Regform' onSubmit={handleSubmit} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="Name" placeholder="Enter Full name" value={full_name} name="full_name"  onChange={handleInput} />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="Mobile" placeholder="Mobile" value={mobile} name="mobile" onChange={handleInput}/>
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="Username" placeholder="Username" value={user_name} name="user_name" onChange={handleInput}/>
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">  
      <Form.Control type="password" placeholder="Password" value={password} name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={handleInput}/>
    </Form.Group>
    <input type="radio" value="Male" name="gender" checked={gender==="Male"} onClick={handleInput} /> Male&nbsp;&nbsp;  
    <input type="radio" value="Female" name="gender" checked={gender==="Female"} onClick={handleInput} /> Female
    <br/><br/>
    <Button variant="contained" type="submit" color='success' size='large' >
      submit
    </Button>
  </Form>
  </div>
  )
}

export default Register