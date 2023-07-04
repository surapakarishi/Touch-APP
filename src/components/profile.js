import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../App.css";
import Unlike from "../logos/unlike.png";
import Share from "../logos/send_3.png";

const Profile = () => {
  let { id } = useParams();
  //  console.log(id);
  const [profile, setProfile] = useState([]);
  let token = sessionStorage.getItem("token");

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

    async function getProfile() {
      const res = await axios.post(`https://test.touchapp.in/api/profileInfo`, {
        // headers:{
        //   'authorization': token,
        //   // 'Accept' : 'application/json, text/plain, */*',
        //   // 'Content-Type' : 'application/x-www-form-urlencoded'
        // },
        profile_id: id,
      });
      //  .then((res)=> console.log(res.data.message[0].userInfo[0]))

      setProfile(res.data.message[0].userInfo[0]);
    }
    getProfile();
  }, [token, id]);

  return (
    <React.Fragment>
      <div>
        <ul className="Nav">
          <li className="touch">
            <h3>TOUCH</h3>
          </li>
          <li className="Reg">
            <Link to="/Home">Home</Link>
          </li>
          <li className="Login">
            <Link to="/Login">Login</Link>
          </li>
        </ul>

        <ul className="Feed">
          <li>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <h4 className="user">{profile.username}</h4>&nbsp;&nbsp;
            <br />
            <h5 className="user">
              {profile.first_name} {profile.last_name}
            </h5>
            <h3>Account Type: {profile.account_type} </h3>
            <br />
            <img
              className="dp"
              src={profile.profile_pic}
              height="300px"
              width="500px"
              alt="pic"
            />
            &nbsp;&nbsp;
            <br />
            <br />
            <img
              id="like"
              src={Unlike}
              alt="unlike"
              width="30px"
              height="30px"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img id="like" src={Share} alt="send" width="30px" height="30px" />
            <br />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Profile;
