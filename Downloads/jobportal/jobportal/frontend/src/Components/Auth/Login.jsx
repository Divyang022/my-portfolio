import React, { useState, useContext, useEffect } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Authcontext } from '../Usercontext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setuserauth } = useContext(Authcontext);
  const auth = localStorage.getItem("auth");

  useEffect(() => {
    if (auth) {
      setuserauth(true);
      navigate("/");
    }
  }, []); // Only run once on component mount

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      if (response.status === 200) {
        localStorage.setItem("auth", response.data.token);
        setuserauth(true);
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed", error);
      // Optionally, add some user feedback here, like setting an error message state
    }
  }

  return (
    <div>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="dummy@gmail.com"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit">Login</button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </div>
  );
}

export default Login;
