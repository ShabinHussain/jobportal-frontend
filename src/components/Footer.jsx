
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import joblogo from '../assets/jobicon.png'; 

function Footer() {
  return (
    <div className=" text-dark py-2" style={{backgroundColor: '#F0FAFD',bottom:0}}>
      <Container>
        <Row className="mb-4 mt-1">
        
          <Col md={4} className='px-4'>
            <img src={joblogo} alt="Job Logo" width={'180px'} height={'100px'} />
            <p className="mt-2 " style={{ textAlign: 'justify' }}>
              Discover your career path with Job Search, where job seekers and employers converge. Whether you're a seasoned professional or just starting your career journey, our platform offers a diverse range of opportunities across industries. From full-time positions to freelance gigs, find the job that fits your skills and ambitions. 
            </p>
          </Col>

  
          <Col md={2}  className='px-4' >
            <h4 className='mt-4'>JobSearch</h4>
            <ul className="list-unstyled mt-4" >
              <li>
                <Link to="/aboutus" className="text-dark" style={{textDecoration:'none'}}>About Us</Link>
              </li>
              <li>
                <Link to="/ourmission" className="text-dark" style={{textDecoration:'none'}}>Our Mission</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-dark" style={{textDecoration:'none'}}>Contact Us</Link>
              </li>
              <li>
                <Link to="/whatsgoingon" className="text-dark" style={{textDecoration:'none'}}>What's Going On</Link>
              </li>
              <li>
                <Link to="/searchjobs" className="text-dark" style={{textDecoration:'none'}}>Search Jobs</Link>
              </li>
              <li>
                <Link to="/tips" className="text-dark" style={{textDecoration:'none'}}>Tips and Advice</Link>
              </li>
              <li>
                <Link to="/candidatelogin" className="text-dark" style={{textDecoration:'none'}}>Candidate Login</Link>
              </li>
              <li>
                <Link to="/candidateregister" className="text-dark" style={{textDecoration:'none'}}>Candidate Register</Link>
              </li>
            </ul>
          </Col>


          <Col md={2} className='px-4'>
            <h4 className='mt-4'>Follow Us</h4>
            <div className="d-flex flex-column mt-4" >
              <a href="https://facebook.com" className="text-dark mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faFacebook} size="2x"  /> Facebook
              </a>
              <a href="https://instagram.com" className="text-dark mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
              </a>
              <a href="https://twitter.com" className="text-dark mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
              </a>
              <a href="https://linkedin.com" className="text-dark" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
              </a>
            </div>
          </Col>

     
          <Col md={4} className='px-4'>
            <h4 className='mt-4'>Send Us a Message</h4>
            <form className='mt-4'>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-2">
                <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Job Search. All rights reserved.</p>
            <p>
              <Link to="/legalinformationp" className="text-dark">Privacy Policy</Link>  
              <Link to="/legalinformationc" className="text-dark">Cookie Policy</Link>  
              <Link to="/legalinformationa" className="text-dark">Accessibility</Link>  
              <Link to="/legalinformationt" className="text-dark">Terms and Conditions</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;




