import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Authcontext } from '../Usercontext'
function Navbar() {
  let auth =localStorage.getItem("auth");
  const {userauth,setuserauth} =useContext(Authcontext)
  if(auth){
    setuserauth(true);
  }
  return (
    <div>
        <Link to="/">Home</Link>

        {
            auth && userauth ? <div>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/logout"}>logout</Link>
            </div>:<div>
              {/* <Link to="/register">Register</Link> */}
              <Link to="/login">Login</Link>
        </div>
          }
        {/* <Link to="/login">Login</Link> */}
    </div>
  )
}

export default Navbar