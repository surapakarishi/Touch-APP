// import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Otp from './components/Otp';
import Profile from './components/profile';
import Display from './components/Display';
import Logout from './components/Logout';

function App() {
  return (
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Otp' element={<Otp/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>

      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
