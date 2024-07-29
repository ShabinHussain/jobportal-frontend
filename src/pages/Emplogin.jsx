
import React, { useEffect, useState } from 'react';
import '../pages/empcss.css';
import { Link } from 'react-router-dom';
import { loginApi } from '../../services/allApi';
import Empprf from './Empprf';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import jobIcon from '../assets/jobicon.png';


function Emplogin() {
  const [loginsuccess, setLoginSuccess] = useState(false);

  const [employeelogin, setEmployeelogin] = useState({
    username: "",
    password: ""
  });

  const handlelogin = async () => {
    const { username, password } = employeelogin;

    if (!username || !password) {
      alert('Please fill the form completely');
    } else {
      const result = await loginApi();
      const user = result.data.find(user => user.username === username && user.password === password);
      if (user) {
        alert('Login successful');
        setLoginSuccess(true);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); 
      } else {
        alert('Please register before logging in');
        window.location = '/empregister';
      }
    }
  };

  useEffect(() => {
    setLoginSuccess(false);
  }, [employeelogin]);

  return (
    <div className='lg1 mt-5'>
     
      {!loginsuccess && (
         <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', width: '100%' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Employer Login</h2>
        <div className="p-4 rounded shadow bg-white">
        <div className="text-center mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/3688/3688609.png" alt="no image" width={'150px'} />
                            </div>
                            <Form>
                                <Form.Group controlId="username" className="mb-3">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Username" 
                                        onChange={(e) => setEmployeelogin({ ...employeelogin, username: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="password" className="mb-3">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        onChange={(e) => setEmployeelogin({ ...employeelogin, password: e.target.value })}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <Button 
                                        type="button" 
                                        className="rounded bg-success text-white" 
                                        style={{ width: '150px' }} 
                                        onClick={handlelogin}
                                    >
                                        <Link className='text-decoration-none text-white' to="#">Login</Link>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
      )}


      {loginsuccess && (
        <>
         <Navbar expand="lg" className='shadow' style={{ backgroundColor: '#F0FAFD', position: 'fixed', zIndex: 10, width: '100%', top: 0, height: '100px', left: 0 }}>
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand href="">
          <img src={jobIcon} alt="No icon" style={{ maxWidth: '70px', height: '70px' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="ms-auto" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/managejobs">Manage jobs</Nav.Link>
            <Nav.Link href="/employerchangepassword">Change Password</Nav.Link>
          </Nav>
          <div className="ms-auto">
            <Button variant="outline-success" className='text-light' style={{ backgroundColor: '#0E5784' }} onClick={() => { setLoginSuccess(false); localStorage.removeItem('loggedInUser'); }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>LogOut</Link>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          <div className="content mt-5">
            <Empprf user3={employeelogin.username} />
          </div>
        </>
      )}
    </div>
  );
}

export default Emplogin;
