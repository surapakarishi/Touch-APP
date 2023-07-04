import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { OtpUser } from '../redux/Actions/Actions';
const Otp = () => {
    const [state, setState] = useState({
        otp:""
    });

    const {otp}=state;
   let dispatch = useDispatch();
   let navigate = useNavigate();

   const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
   }
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(OtpUser(state));
    //   navigate('/Login')

    }

  return (
    <div> <Form className='Regform' onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="otp" placeholder="otp" value={otp} name="otp" onChange={handleChange} />
       <Form.Text className="text-muted">
         
       </Form.Text>
     </Form.Group>
     <Button variant="primary" type="submit" >
      submit
    </Button>
     </Form>
     </div>
  )
}

export default Otp;