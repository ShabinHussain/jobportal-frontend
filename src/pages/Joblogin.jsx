
import React, { useEffect, useState } from 'react';
import '../pages/empcss.css';
import { Link } from 'react-router-dom';
import Jobprf from './Jobprf';
import { appliedjobsApi, appliedjobsApi2, jobseekerlogApi, showappliedApi, showappliedApi2, showjobsApi } from '../../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCalendarDays, faLocationDot, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import jobIcon from '../assets/jobicon.png'


function Joblogin() {
    const [jobs, setJobs] = useState([]);
    const [loginUser, setLoginUser] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [joblogin, setJobLogin] = useState({
        username: "",
        password: ""
    });
    const [appliedJobsList, setAppliedJobsList] = useState([]);
    const [appliedJobsList2, setAppliedJobsList2] = useState([]);

    useEffect(() => {
        setLoginSuccess(false);
        toShowJobs();
    }, []);

    const toShowJobs = async () => {
        const result = await showjobsApi();
        setJobs(result.data);
    };

    const loginJobseeker = async () => {
        const { username, password } = joblogin;

        if (!username || !password) {
            alert('Please fill the form completely');
        } else {
            const result = await jobseekerlogApi();
            const user = result.data.find(user => user.uname === username && user.pswd === password);

            if (user) {
                alert('Login successful');
                setLoginSuccess(true);
                setLoginUser(user.uname);
                fetchAppliedJobs(user.uname);
            } else {
                alert('Please register before login');
                window.location = '/jobregister';
            }
        }
    };

    const fetchAppliedJobs = async (username) => {
        const result1 = await showappliedApi();
        const filteredJobs1 = result1.data.filter(pro => pro.uname === username);
        setAppliedJobsList(filteredJobs1);

        const result2 = await showappliedApi2();
        const filteredJobs2 = result2.data.filter(pro => pro.uname === username);
        setAppliedJobsList2(filteredJobs2);
    };

    const appliedJobs = async (id) => {
        const selectedJob = jobs.find(job => job.id === id);
        selectedJob.uname = loginUser;

        const userResult = await jobseekerlogApi();
        const userDetails = userResult.data.find(user => user.uname === loginUser);

        selectedJob.email = userDetails.email;
        selectedJob.name = userDetails.name;
        selectedJob.phone = userDetails.phone;

        const showResult1 = await showappliedApi();
        const showResult2 = await showappliedApi2();

        const firstArrayUser = showResult1.data.find(user => user.uname === loginUser);
        const secondArrayUser = showResult2.data.find(user => user.uname === loginUser);

        if (!firstArrayUser && !secondArrayUser) {
            await appliedjobsApi(selectedJob);
            setAppliedJobsList(prev => [...prev, selectedJob]);
            alert('Job applied successfully');
        } else {
            const alreadyAppliedInFirst = showResult1.data.some(job => job.id === id && job.uname === loginUser);
            const alreadyAppliedInSecond = showResult2.data.some(job => job.id === id && job.uname === loginUser);

            if (alreadyAppliedInFirst || alreadyAppliedInSecond) {
                alert('Already applied');
            } else if (firstArrayUser) {
                await appliedjobsApi(selectedJob);
                setAppliedJobsList(prev => [...prev, selectedJob]);
                alert('Job applied successfully');
            } else if (secondArrayUser) {
                await appliedjobsApi2(selectedJob);
                setAppliedJobsList2(prev => [...prev, selectedJob]);
                alert('Job applied successfully');
            }
        }
    };

    return (
        <>
            {!loginSuccess && (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', width: '100%' }}>
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                        <h2 className="text-center mb-4">Careerseeker Login</h2>
                        <div className="p-4 rounded shadow bg-white">
                            <div className="text-center mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/3688/3688609.png" alt="no image" width={'150px'} />
                            </div>
                            <Form>
                                <Form.Group controlId="username" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        onChange={(e) => setJobLogin({ ...joblogin, username: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="password" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => setJobLogin({ ...joblogin, password: e.target.value })}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <Button
                                        type="button"
                                        className="rounded bg-success text-white"
                                        style={{ width: '150px' }}
                                        onClick={loginJobseeker}
                                    >
                                        <Link className='text-decoration-none text-white' to="#">Login</Link>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}

            {loginSuccess && (

                <div>
                    <Navbar expand="lg" className='shadow' style={{ backgroundColor: '#F0FAFD', position: 'fixed', zIndex: 10, width: '100%' }}>
                        <Container fluid className='me-4'>
                            <Navbar.Brand href="">
                                <img src={jobIcon} alt="no icon" width={'150px'} height={'70px'} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>



                                    <Nav.Link href="/candidatejobalerts" className='me-2'>Job Alerts</Nav.Link>
                                    <Nav.Link href="/candidatesavedjobs" className='me-2'>Saved jobs</Nav.Link>
                                    <Nav.Link href="/candidatechangepassword" className='me-2'>Change Password</Nav.Link>
                                </Nav>
                                <div className="d-flex">
                                    <Button variant="outline-success" className='text-light' style={{ backgroundColor: '#0E5784', marginLeft: '20px' }}>
                                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>LogOut</Link>
                                    </Button>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div >
                        <Jobprf  login={loginUser} appliedJobsList={appliedJobsList} appliedJobsList2={appliedJobsList2} />
                    </div>

                    <Row>
                        {jobs.length > 0 ? jobs.map((item) => (
                            <Col xs={12} md={6} lg={4} className="mb-3 mt-5" key={item.id}>
                                <Card className="h-100">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={3} className="text-center">
                                                <img src="https://cdn-icons-png.flaticon.com/512/3688/3688609.png" alt="no image" style={{ width: '60px' }} />
                                            </Col>
                                            <Col xs={9}>
                                                <h5>{item.jobtitle}</h5>
                                                <p><FontAwesomeIcon icon={faLink} /> Company: {item.cname}</p>
                                                <p><FontAwesomeIcon icon={faCalendarDays} /> Published On: {item.posteddate}</p>
                                                <p><FontAwesomeIcon icon={faLocationDot} /> {item.address}</p>
                                                <p><FontAwesomeIcon icon={faCalendarXmark} /> Closing On: {item.lastdate}</p>
                                            </Col>
                                            <Col xs={12} className="d-flex justify-content-center mt-3">
                                                <Button variant='primary' onClick={() => appliedJobs(item.id)} className='w-75'>Apply</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <p>No jobs to display</p>}
                    </Row>
                </div>
            )}
        </>
    );
}

export default Joblogin;




