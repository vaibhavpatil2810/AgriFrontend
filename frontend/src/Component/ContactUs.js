import React, { useState } from 'react';
import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = React.useState('Send')

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Submitting...')

    axios.post('/api/contact', { name, email, message })
      .then(response => {
        // Handle successful contact request
        console.log('Message sent:', response.data);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        // Handle contact error
        console.error('Error sending message:', error);
      });
  }

  // return (
  //   <div>
  //     <h1>Contact Us</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={name} onChange={e => setName(e.target.value)} />
  //       </label>
  //       <br/>
  //       <label>
  //         Email:
  //         <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
  //       </label>
  //       <br/>
  //       <label>
  //         Message:
  //         <textarea value={message} onChange={e => setMessage(e.target.value)} />
  //       </label>
  //       <br/>
  //       <button type="submit">Send</button>
  //     </form>
  //   </div>
  // );


  return (
    <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default ContactUs;
