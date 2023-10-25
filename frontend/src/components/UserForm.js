import React, { useState } from 'react';
import './UserForm.css';
import axios from 'axios';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    //try {
      const response = await axios.post('http://localhost:5000/api/users', {
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setPassword('');
      
      // Redirect the user to a different webpage (e.g., after successful registration)
      redirectToPage('C:\Users\amjos\OneDrive\Documents\web dev\DBMS proj\event-manager\temp\index1.html'); // Replace '/success-page' with the actual URL you want to redirect to
    //} catch (error) {
    //  console.error(error);
    //}
    function redirectToPage(url) {
      window.location.href = url;
    }
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
      <button type="submit" className='button'>Login</button>
    </div>
    </form>
  );
};

export default UserForm;