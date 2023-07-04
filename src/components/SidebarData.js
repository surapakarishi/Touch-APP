import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PortraitIcon from '@mui/icons-material/Portrait';
import ExploreIcon from '@mui/icons-material/Explore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MailSharpIcon from '@mui/icons-material/MailSharp';
// import { useNavigate } from "react-router-dom";


export const SidebarData = [
    {
       title:'Home',
       
       icon:<HomeIcon/> ,
       link:'/Home'
    },
    {
        title:'Search',
        
        icon:<SearchIcon/> ,
        link:'/search'
     },
     {
        title:'Messages',
        
        icon:<MailSharpIcon/> ,
        link:'/message'
     },
     {
        title:'Explore',
        
        icon:<ExploreIcon/> ,
        link:'/Explore'
     },
     {
        title:'Notification',
        
        icon:<NotificationsIcon/> ,
        link:'/notification'
     },
     {
        title:'Create',
        
        icon:<AddBoxIcon/> ,
        link:'/Create'
     },
     {
        title:'Profile',
        
        icon:<PortraitIcon/> ,
        link:'/profile'
     },
     {
        title:'Logout',
        
        icon:<LogoutOutlinedIcon/> ,
        link:'/Logout'
     },
    
]