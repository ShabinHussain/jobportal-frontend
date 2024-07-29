import React, { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginApi, registerApi } from '../../services/allApi';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/empcss.css';

function Empregister() {
  const [Emplogin, setEmplogin] = useState({
    cname: "",
    employees: "",
    name: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  });

  const handleRegister = async () => {
    const { username, email, password } = Emplogin;

    if (!username || !email || !password) {
      toast.error('Please fill out all required fields');
    } else {
      try {
        const result1 = await loginApi();
        const user = result1.data.find(user => user.username === username || user.password === password || user.email === email);

        if (user) {
          toast.error('Details already registered, please enter new details');
        } else {
          const result = await registerApi(Emplogin);
          toast.success('Registration successful');
          window.location = '/emplogin';
        }
      } catch (error) {
        console.error('Registration error:', error);
        toast.error('An error occurred during registration');
      }
    }
  };

  return (
    <>
      <Container fluid className="p-4">
        <h1 className="text-center mb-4">Register Employer Account</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="rounded shadow-sm p-4 bg-white">
              <form>
                <Row className="mb-3">
                  <Col>
                    <label htmlFor="cmpname">Your company's name</label>
                    <input
                      type="text"
                      id="cmpname"
                      value={Emplogin.cname}
                      onChange={(e) => setEmplogin({ ...Emplogin, cname: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <label htmlFor="empnum">Number of Employees in your company</label>
                    <input
                      type="text"
                      id="empnum"
                      value={Emplogin.employees}
                      onChange={(e) => setEmplogin({ ...Emplogin, employees: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      value={Emplogin.name}
                      onChange={(e) => setEmplogin({ ...Emplogin, name: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <label htmlFor="pnum">Your phone number</label>
                    <input
                      type="text"
                      id="pnum"
                      value={Emplogin.phone}
                      onChange={(e) => setEmplogin({ ...Emplogin, phone: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <label htmlFor="email">Your email address</label>
                    <input
                      type="text"
                      id="email"
                      value={Emplogin.email}
                      onChange={(e) => setEmplogin({ ...Emplogin, email: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      value={Emplogin.username}
                      onChange={(e) => setEmplogin({ ...Emplogin, username: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col>
                    <label htmlFor="pswd">Password</label>
                    <input
                      type="password"
                      id="pswd"
                      value={Emplogin.password}
                      onChange={(e) => setEmplogin({ ...Emplogin, password: e.target.value })}
                      className="form-control"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center">
                    <Button
                      variant="success"
                      onClick={handleRegister}
                      className="text-white"
                    >
                      <Link to="#" className="text-decoration-none text-white">Register</Link>
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  );
}

export default Empregister;
