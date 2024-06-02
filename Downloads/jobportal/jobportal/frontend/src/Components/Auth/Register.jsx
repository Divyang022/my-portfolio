import React,{useState} from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import axios from "axios"
import { useNavigate} from 'react-router-dom'


function Register() {
   // const[show,setShow]=useState("show")
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const navigate=useNavigate()
/* function toggle(e){
    e.preventDefault()
    if(show=="show")
    {
      setShow("hide")
    }
    else
    {
      setShow("show")
    }
  } */
  
  async function handleRegister(e)
  {
    e.preventDefault();
       const response = await axios.post("http://localhost:5000/register",{
          name:name,email:email,password:password
       })
   //console.log(response)
   if(response.status==200)
      {
        navigate("/")
      }
        else
     {
      alert("registration failed")
      }
}
  return (
    <div>
            {/* <form>
        <div>
          <input type='text' placeholder='fullname' onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
        <input type='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
          <input type={show=="show"?"password":"text"} placeholder='password' onChange={e=>setPassword(e.target.value)}/>
          <span className='btn-toggle' onClick={toggle}>{show}</span>
        </div>
      <div>
        <button type='submit' className='btn-register' onClick={userRegister}>Register</button>
      </div>
      </form> */}
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
           {/*  <div className="inputTag">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div> */}
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="fullname"
                  onChange={e=>setName(e.target.value)}
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  onChange={e=>setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            {/* <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  placeholder="12345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip />
              </div>
            </div> */}
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  onChange={e=>setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleRegister}>
              Register
            </button>
           {/*  <Link to={"/login"}>Login Now</Link> */}
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="login" />
        </div>
      </section>
    </div>
  )
}

export default Register