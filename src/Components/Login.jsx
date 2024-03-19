import React from 'react'
import "./Login.css"
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, forgotPassword} from '../Features/Userslice';
import { toast } from 'react-toastify';
import { setuser } from '../Features/Userslice';
import img2 from '../images/img2.png'
// import {img1} from './images/img1'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    otp: '', // New field for OTP
  });
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(userData)).unwrap();
      if (response.responseData.success) {
        toast.success(response.responseData.message);
        dispatch(setuser(response.userData)); // Dispatch setuser action
        navigate('/home'); // Navigate to home after successful login
      } else {
        setError(response.responseData.message);
      }
    } catch (error) {
      console.error(error);
      setError("Login failed. Please try again later.");
    }
  };


  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(forgotPassword(userData.email)).unwrap(); // Dispatch forgotPassword with user's email
  //     toast.success(response.message);
  //     setError("email send for reset email")
  //   } catch (error) {
  //     console.error(error);
  //     setError("Forgot password failed. Please try again later.");
      
  //   }
  // };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(forgotPassword(userData.email)).unwrap();
      // setInfoMessage(response.message); // Set info message to show success
      setError("Mail send Successfully")
    } catch (error) {
      console.error(error);
      setError("Forgot password failed. Please try again later.");
    }
  };

  

  return (
    
     <div class="container" id="home">
        <div class="login-left">
            <div class="login-header">
                <h1>Welome</h1>
                <p>Please login to continue......</p>
            </div>
            <form action="" class="login-form" autocomplete="off" onSubmit={handleLogin}>
                <div class="login-content">
                    <div class="form-item">
                        <label for="email">Enter Email</label>
                        <input type="email" name="email" value={userData.email}  onChange={handleInputChange}  placeholder="example@email.com"/>
                    </div>
                    <div class="form-item">
                        <label for="password">Enter Password</label>
                        <label for="text"></label>
                        <input type="password" name= "password" value={userData.password} onChange={handleInputChange}    placeholder="Enter your Password" required class="pass-key"/>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">LogIn</button>
                </div>
                <div class="login-footer">
              
                <Link to="/forgotpassword" className='button' id="buttonforgotpassword" onClick={handleForgotPassword}>Forgot password</Link>
                <Link to="/signup" className="button" id="button2">
              Sign Up
            </Link>
                    {/* <a href="">
                        <img width="30" src="https://img.icons8.com/color/512/facebook-new.png" alt="facebook"/>Facebook
                    </a>
                    <a href="">
                        <img width="30" src="https://img.icons8.com/fluency/512/google-logo.png" alt="google"/>Google
                    </a> */}
                </div>
                </form>
        </div>
        <div class="login-right">
            <img src={img2} alt=""/>
        </div>
        </div>
  )
}

export default Login
