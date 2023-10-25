import React, { useState } from 'react';
import './UserForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //try {
      const response = await axios.post('http://localhost:5000/api/users', {
        email,
        password,
      });
      console.log("hello");
      console.log(response.data);
      setEmail('');
      setPassword('');
      
      navigate("/home");
  };
  
  
  
  

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };*/

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>

      <div className='header'>
        <div className='text'>LOGIN</div>
      </div>

      <div className='input-container'>
        <div className='label'>Email:</div>
        <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='input-container'>
        <div className='label'>Password:</div>
        <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className='button' >Login</button>
    </div>
    </form>
  );
};

export default UserForm;