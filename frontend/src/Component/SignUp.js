import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import signup from './Image/signup.jpg'; // gives image path

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();


    axios.post('/api/register', { name, email, password })
      .then(response => {
        // Handle successful registration
      })
      .catch(error => {
        // Handle registration error
      });
  }

  return (
    <div
      style={{
        backgroundImage: `url(${signup})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <table align='center'>
        <div className='signup'>
          <form className='needs-validation' onSubmit={handleSubmit}>
            <h2 className="mb-3" align='center'>Sign Up</h2>
            <div className='form-group was-validated mb-2'>
              <label htmlfor='Name' className='form-label'
                onChange={e => setName(e.target.value)}>Name</label><br />
              <input id='form1' type='text' className='form-control' placeholder="Enter your name" required/>
            </div>

            <div className='form-group was-validated mb-2'>
              <label htmlfor='email' className='form-label'
                onChange={e => setEmail(e.target.value)}>Email</label><br />
              <input type='email' className='form-control' placeholder="Enter your email" required/>
            </div>

            <div className='form-group was-validated mb-2'>
              <label htmlfor='password' className='form-label'
                onChange={e => setPassword(e.target.value)}>Create a Password</label><br />
              <input type='password' className='form-control' placeholder="Create a Password" required/>
            </div>

            <div className='form-group was-validated mb-2'>
              <label htmlfor='password' className='form-label'>Confirm Password</label><br />
              <input type='password' className='form-control' placeholder="Confirm Password" required/>
            </div>

            <button type='submit' className='btn btn-success w-100 mt-2'>Register</button><br /><br />
            <p className="forgot-password text-right">
              <a href="/login">Already have an account?</a>
            </p>

          </form>
        </div>
      </table>
    </div>
  );
}

export default Registration;
