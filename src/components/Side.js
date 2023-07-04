import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Side = () => {
  let navigate = useNavigate();
  const clearStorage = () => {
    sessionStorage.clear("token");

    navigate("/Login");
  };
  return (
    <div className="sidebar">
        
      <ul className="sidebarlist">
        {SidebarData.map((item, key) => {
          return (
            <li key={key}
            className="row"
            id={window.location.pathname === item.link?"active":""}
            onClick={()=>{
                window.location.pathname = item.link;
            }}
            >
              <div id='icon'>{item.icon}</div>
              <div id='title'>{item.title}</div>
              
            </li>
            
          );
        })}
      </ul>
     
    </div>
  );
};

export default Side;
