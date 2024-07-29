import React, { useState } from 'react';
import '../pages/empcss.css';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { jobseekerlogApi, jobseekerregApi } from '../../services/allApi';

function Empregister() {
  const [register, setRegister] = useState({
    name: "",
    phone: "",
    email: "",
    uname: "",
    pswd: ""
  });

  const registerjobseeker = async () => {
    const { name, phone, email, uname, pswd } = register;
    if (!name || !phone || !email || !uname || !pswd) {
      alert('Please enter the details completely');
    } else {
      const result1 = await jobseekerlogApi();
      const user = result1.data.find(user => user.uname === uname || user.pswd === pswd || user.email === email);
      if (user) {
        alert('Details already registered, please enter new details');
        window.location = '/jobregister';
      } else {
        const result = await jobseekerregApi(register);
        console.log(result);
        alert('Registration successful');
        window.location = '/joblogin';
      }
    }
  }

  return (
    <Container className="lg1 my-5">
      <h1 className='text-center'>Register Careerseeker Account</h1>
      <div className='rounded shadow p-4 mt-4' style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setRegister({ ...register, name: e.target.value })}
            />
          </Form.Group>
          
          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Your phone number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setRegister({ ...register, phone: e.target.value })}
            />
          </Form.Group>
          
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Your email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setRegister({ ...register, email: e.target.value })}
            />
          </Form.Group>
          
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setRegister({ ...register, uname: e.target.value })}
            />
          </Form.Group>
          
          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setRegister({ ...register, pswd: e.target.value })}
            />
          </Form.Group>
          
          <Button variant="success" className="w-100" onClick={registerjobseeker}>
            <Link className='text-decoration-none text-white'>Register</Link>
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Empregister;
