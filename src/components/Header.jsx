import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/header.css';
import { Link, useLocation } from 'react-router-dom';
import jobIcon from '../assets/jobicon.png'


function Header() {
  const location = useLocation();

  const firstNavbarRoutes = ['/', '/searchjobs', '/tips', '/aboutus', '/ourmission', '/contactus', '/whatsgoingon', '/candidatelogin', '/candidateregister','/legalinformationp','/legalinformationc','/legalinformationa','/legalinformationt','/frequently','/resource'];
  const secondNavbarRoutes = [ '/candidatejobalerts', '/candidatesavedjobs', '/candidatechangepassword'];
  const thirdNavbarRoutes = ['/managejobs','/employerchangepassword'];

  const isFirstNavbarRoute = firstNavbarRoutes.includes(location.pathname);
  const isSecondNavbarRoute = secondNavbarRoutes.includes(location.pathname);
  const isthirdNavbarRoutes = thirdNavbarRoutes.includes(location.pathname);
  return (

    <>

{isFirstNavbarRoute && (
       <Navbar expand="lg" className='shadow' style={{ backgroundColor: '#F0FAFD', position: 'fixed', zIndex: 10, width: '100%' }}>
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex' }}>
          <img src={jobIcon} height="70" alt="logo" style={{ maxHeight: '70px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
          <Nav className="me-auto fs-5">
            <NavDropdown title="Jobseekers" id="jobseekers-nav-dropdown">
              <NavDropdown.Item as={Link} to="/searchjobs">
                Search for your next job
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tips">
                Tips and Advice
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more-resources"><Link to={'/resource'} className='text-decoration-none text-dark'>More Resources</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faq"> <Link to={'/frequently'} className='text-decoration-none text-dark'>Frequently Asked Questions</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Employers" id="employers-nav-dropdown"></NavDropdown>
            <NavDropdown title="About" id="about-nav-dropdown">
              <NavDropdown.Item as={Link} to="/aboutus">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ourmission">
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contactus">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/whatsgoingon">
                What's Going On
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex ms-auto">
          <Button variant="outline-light" style={{ backgroundColor: '#0E5784' }} className='me-3'>
              <Link to="/login" className="text-light " style={{ textDecoration: 'none' }}>
                Login / Register
              </Link>
            </Button>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      )}
      {isSecondNavbarRoute && (
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
                <Button  variant="outline-success" className='text-light' style={{ backgroundColor: '#0E5784', marginLeft: '20px' }}>
                 <Link to='/' style={{textDecoration:'none',color:'white'}}>LogOut</Link>
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {isthirdNavbarRoutes && (
        <Navbar expand="lg" className='shadow ' style={{ backgroundColor: '#F0FAFD', position: 'fixed', zIndex: 10, width: '100%' }}>
          <Container fluid className='me-4'>
            <Navbar.Brand href="">
              <img src={jobIcon} alt="no icon" width={'150px'} height={'70px'} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav.Link href="/managejobs" className='me-4'>Manage jobs</Nav.Link>
            <Nav.Link href="/employerchangepassword" className='me-2'>Change Password</Nav.Link>
              <div className="d-flex ms-auto">
              <Button  variant="outline-success" className='text-light' style={{ backgroundColor: '#0E5784', marginLeft: '20px' }}>
                 <Link to='/' style={{textDecoration:'none',color:'white'}}>LogOut</Link>
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
   
    </>
  )
}

export default Header