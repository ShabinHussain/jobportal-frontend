import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LinearGradient } from 'react-text-gradients'

function Contactus() {
  return (
    <Container fluid className="p-4" style={{ overflowX: 'hidden' }}>
      <div className="contact-us-container" style={{ marginTop: '120px' }}>
        <Row className="main mb-4 mb-lg-0 align-items-start">
          <Col md={12} lg={6} className="mb-3 mb-lg-0">
            <div className="contact-form-container ">
              <h2 className=' mt-3 text-center'><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
                Contact Us
              </LinearGradient></h2>
              <Form className="p-3">
                <Form.Group controlId="formName">
                  <Form.Label >Name:</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control type="tel" placeholder="Your Phone (optional)" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                </Form.Group>

                <div className="text-center mt-3 mt-lg-5">
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col md={12} lg={6} className="contact-info-container mt-5 pt-5 mb-3 mb-lg-0">
            <div className="text-center ">
              <h2 className=' '><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
                Contact information
              </LinearGradient></h2>
              <div className='mt-4'>
                <p>123 Main Street</p>
                <p>Anytown, State 12345</p>
                <p>Email: contact@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </div>

              <h3 className='mt-4 '><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
                Follow us on
              </LinearGradient></h3>

              <div className="social-links d-flex justify-content-center  mt-4">
                <a className='p-2' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#759ED3' />
                </a>
                <a className='p-2' href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color='#759ED3' />
                </a>
                <a className='p-2' href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" color='#759ED3' />
                </a>
                <a className='p-2' href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" color='#759ED3' />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12}>
            <div className="text-center">
              <iframe
                width="100%"
                height="300"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2596611454553!2d76.30741011465796!3d10.014290392786048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0810402b804aa3%3A0xe89f780e007f5e90!2sKakkanad%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1621021234392!5m2!1sen!2sin"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>

      <style>{`
        .contact-us-container {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .contact-form-container {
          margin-bottom: 20px;
        }

        .contact-info-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .social-links a {
          display: inline-block;
          margin: 0 15px;
          color: #333;
          text-decoration: none;
        }

        .social-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 991px) {
          .contact-form-container,
          .contact-info-container {
            padding: 15px;
          }

          .social-links {
            margin: 0;
          }
        }
      `}</style>
    </Container>
  );
}

export default Contactus;
