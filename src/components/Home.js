import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Unlike from "../logos/unlike.png";
import Share from "../logos/send_3.png";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Side from "./Side";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import "../App.css";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";


const Home = () => {
  const [feed, setFeed] = useState([]);
  let token = sessionStorage.getItem("token");
  // let State = useSelector((state)=>state.users)

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    async function getFeeds() {
      const res = await axios.post(`https://test.touchapp.in/api/getFeeds`, {
        offset: 0,
      });
      if (res.data.status === 200) {
        setFeed(res.data.data);
      }
    }
    getFeeds();
  }, [token]);

  // let navigate = useNavigate();
  // const clearStorage = () => {
  //   sessionStorage.clear("token");

  //   navigate("/Login");
  // };

  const handleLike = async (id) => {
    await axios
      .post(
        `https://test.touchapp.in/api/postLike`,
        {
          post_id: id,
          reaction_id: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.message);
      })

      .then((err) => console.log(err));
  };

  return (
    <div>
      <div className="Nav"  >
      <h3 className="touch">TOUCH</h3>
        <ul >
          <li >
            {/* <h3 className="touch">TOUCH</h3> */}
          </li>
          {/* <li className="Login">
            <Button variant="text" color="info" className="Login" onClick={clearStorage}>
              logout
            </Button>
          </li> */}
          <li className="More">About us &nbsp; &nbsp; &nbsp; Contact us  &nbsp; &nbsp; &nbsp;  <ReadMoreIcon sx={{fontSize:35}}/> More</li>
          {/* <li> </li>
          <li> </li> */}
        </ul>
      </div>

      <div >
        <div className="Home">
      <Side/>
      </div>
        {feed.map((accounts, index) => {
          const { username, profile_pic, postid, like_count } = accounts;
          return (
            <div key={index}>
              <ul className="Feed">
                <li>
                  <br />
                 
                  <AccountCircleIcon sx={{ fontSize: 100 }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link className="user" to={`/Profile/${accounts.user_id}`}>
                    {username}
                  </Link>
                  &nbsp;&nbsp;
                  <br />
                  <br />
                  
                  <img
                    className="dp"
                    src={profile_pic}
                    height="500px"
                    width="500px"
                    alt="pic"
                  />
                  &nbsp;&nbsp;
                  <br />
                  <br />
                  
                   <FavoriteBorderSharpIcon onClick={() => handleLike(postid)} sx={{ fontSize: 35 }}/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                 <ChatBubbleOutlineSharpIcon sx={{ fontSize: 35 }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <SendIcon sx={{ fontSize: 35 }}/>
                  <br />
                  {like_count} &nbsp;likes
                </li>
                <hr/>
              </ul>
             
            </div>
            
          );
        })}
         
      </div>
    
    </div>
  );
};

export default Home;
