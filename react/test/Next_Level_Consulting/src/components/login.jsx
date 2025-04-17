import React, { useState } from 'react';
import './login.css';
import { signIn, signUp } from '../firebase';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signUp(formData.email, formData.password);
      console.log('Sign Up successful:', userCredential.user);
      alert('Account created successfully!');
      navigate('/'); // Redirect to home after sign-up
    } catch (error) {
      console.error('Error during sign-up:', error.message);
      alert(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signIn(formData.email, formData.password);
      console.log('Sign In successful:', userCredential.user);
      alert('Welcome back!');
      navigate('/'); // Redirect to home after sign-in
    } catch (error) {
      console.error('Error during sign-in:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className='main-container'>
      <div className={`container ${isActive ? 'active' : ''}`}>
        {/* Sign-Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button>Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="toggle-container">
          <div className="toggle">
            {/* Left Toggle Panel (visible when sign-up is active) */}
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                type="button"
                className="hidden"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>
            {/* Right Toggle Panel (visible when sign-in is active) */}
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button
                type="button"
                className="hidden"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;