import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signup } from '../Features/Userslice';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import img2 from '../images/img2.png';
// import './Login.css';





export default function Signup() {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignupClick = async (e) => {
        e.preventDefault();
        if (userData.name && userData.password) {
            dispatch(signup(userData))
            .then((response) => {
                if (response.payload && response.payload.responseData) {
                    toast.success(response.payload.responseData.message);
                    // Navigate to the login page after successful signup
                    window.location.href = '/';
                } else {
                    setError("Unknown error occurred.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Signup failed. Please try again later.");
            });
        } else {
            toast.error('Fill all the details!');
        }
    };

    return (
        <div class="container" id="home">
            <div class="login-left">
                <div class="login-header">
                    <h1>Welcome</h1>
                    <p>Signup Here................</p>
                </div>
                <form action="" class="login-form" autocomplete="off" onSubmit={handleSignupClick}>
                    <div class="login-content">
                        <div class="form-item">
                            <label for="name">Enter Username</label>
                            <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Enter your username" />
                        </div>
                        <div class="form-item">
                            <label for="email">Enter Email</label>
                            <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="example@email.com" />
                        </div>
                        <div class="form-item">
                            <label for="password">Enter Password</label>
                            <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Enter your Password" required class="pass-key" />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Signup</button>
                    </div>
                    <p>already registered</p>
                    <div class="login-footer">
                        <Link to="/" className="button" id="button2">Login</Link>
                    </div>
                </form>
            </div>
            <div class="login-right">
                <img src={img2} alt="" />
            </div>
        </div>
    );
}
        