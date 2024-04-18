import React, {useEffect, useState} from 'react'
import "./Login.css";
import request from "../Apis/request";
import { useNavigate } from 'react-router';
import axios from "axios";
import { firebase_app, Jwt_token } from '../Config/Config';
import man from '../assets/images/dashboard/1.png';
import Swal from "sweetalert2";
import { BaseURL, Token } from '../api/DataApis';


  const Signin = () => {
    const [value, setValue] = useState(
      localStorage.getItem('profileURL' || man)
  );
  const [name, setName] = useState(
      localStorage.getItem('Name')
  );
    
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const history = useNavigate();
  
  
  const handleLogin = async( event ) => {


    
    // alert("okkk")
    try {
         event.preventDefault();
         // Make an API request to authenticate the user
         let response = await axios({
           url: `${BaseURL}/webservices/login`,
           method: 'POST',
           data: JSON.stringify({username: username, password: password}),
           headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            "Token":Token,
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9.vPN0PhthyTuf9l3912NksmpzHXvWjZ7Nywhe22GK2zI',
        }
    });
      console.log("responseeeeeeeeeeeeeeeeeeeeeeeee", response);
      if (response.data.status == "200" ) {
        // alert("hello345");
          // Authentication successful
          //do something...
          // localStorage.setItem("authenticated", true);
          // navigate(${process.env.PUBLIC_URL}/dashboard/default);
          setValue(man);
          setName('Emay Walter');
          localStorage.setItem('token', Jwt_token);
          localStorage.setItem("userdata",JSON.stringify(response.data))
          console.log('token', Jwt_token)
          // Swal.fire({
          //   icon: 'success',
          //   title: 'success..."',
          //   text:'Logged in successfully!.',
          //   showConfirmButton: true,
          //   timer: 5000,
          // });
          window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`;

          console.log('Login successful');
        } else {
          // Authentication failed
          Swal.fire({
            icon: 'error',
            title: 'Oops..."',
            text:'Invalid Credentials!.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        alert('Error during login:', error);
      }
    };
   



  return (
    <>
<div className="container123">
    <h2 className="login-title">Sign In With Firebase</h2>
    <p className="peregrap">Enter Your email &amp; password to login</p>
    <form className="login-form12">
      <div>
        <label htmlFor="email">Username</label>
        <input
          id="text"
          type="text"
          placeholder="username"
          name="text"
          required=""
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          name="password"
          required=""
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          defaultValue="lsRememberMe"
          className="rememberMe"
        /> 
         <label style={{marginLeft:"7px", position:"relative",top:"-2px"}} htmlFor="rememberMe">Remember me</label>
        <div className="links">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <button className="btn btn--form" type="submit" onClick={handleLogin} value="Log in">
        Log in
      </button>
      <div>
        <h6 className="mb-3">Or Sign in with</h6>
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-google" />
        </a>
      </div>
      <div className="links">
        <a href="#">Do not have an account?</a>
        <a className="ml-3" href="#">
          Create Account
        </a>
      </div>
    </form>
  </div>
</>
 )
 }
export default Signin;