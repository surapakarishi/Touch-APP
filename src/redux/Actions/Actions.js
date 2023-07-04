
 import axios from "axios";

import { registerUser,loginUser,UserOtp } from "./Actions.type"; 
import { useEffect } from "react";
import { UserFeed } from "./Actions.type";
 
//  export const registerUser=(users)=>({
//     type:"REGISTER_USER",
//     payload:users
// });

// export const loginUser=(users)=>({
//     type:"LOGIN_USER",
//     payload:users
// });

// export const UserOtp=()=>({
//     type:"USER_OTP"
// })



export const AddUser=(user,navigate)=>{
   
    return async function(dispatch){
       await axios.post(` https://test.touchapp.in/auth/register`,user)
           
   
        .then((res)=>{
            console.log("res", res);
            
            if(res.data.status === 200){
                navigate("/Otp")
                dispatch(registerUser(res.data.data.user));
                alert('Details Validated click ok for next step')
                alert(`Otp is ${res.data.data.user.verify_code}`)
            }else{
                alert('Invalid Details')
            }
           
            
        })
        .catch((error) => console.log(error));
    };
};

export const UserLogin=(state)=>{

    return async function(dispatch){
       await axios.post(` https://test.touchapp.in/auth/login`,state)
           
    
        .then((res)=>{
            sessionStorage.setItem('token',res.data.data.token)
            console.log("res", res);
            console.log("res", res.data.data.token);

            dispatch(loginUser(res.data.data));
            
        })
        .catch((error) => console.log(error));
    };
};

export const OtpUser=(number)=>{
    
    return async function(dispatch){
       await axios.post(` https://test.touchapp.in/auth/verifyOtp`,number)
           
   
        .then((res)=>{
            console.log("res", res);
            dispatch(UserOtp(res.data.data.user.verify_code));
            if(res.data.status === 200){
                window.open('/Login','_self')
                alert('Registration successful')
            }else{
                alert('Invalid OTP')
            }
           
            
        })
        .catch((error) => console.log(error));
    };
};
export const userHome=(token)=>{

    return async function(dispatch){
   useEffect(()=>{
    axios.interceptors.request.use(
       config=>{
          config.headers.authorization = `Bearer ${token}`;
           return config;
            },
         error=>{
         return Promise.reject(error);
               }
         );

    async function getFeeds(){

        const res = await axios.post(`https://test.touchapp.in/api/getFeeds`,{
   
    
               offset:0,

               })
          if(res.data.status===200){ 

          dispatch(UserFeed(res.data.data))
        }
   
        }
       getFeeds();

},[dispatch]);
}
}

