import React,{useContext} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import{Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile'
import Logout from './Components/Auth/Logout'
//import PostJob from "./Components/Job/PostJob";
import { Outlet,Navigate } from 'react-router-dom'
import { Authcontext } from './Components/Usercontext'
function App() {
  const Privateroute =()=>{
    const auth= localStorage.getItem("auth");
    const {userauth} = useContext(Authcontext);
    return (
      <>
      {
        userauth || auth ?<Outlet/>:
        <Navigate replace to={"/login"}/>
      }
      </>
    )
  }
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home />} />
        <Route element ={<Privateroute/>}>
     
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/logout" element={<Logout/>}/>
        </Route>
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App