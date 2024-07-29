import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function Accessibility() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Container fluid style={{ 
        padding: '0', 
        margin: '0', 
        flex: '1 0 auto',
        backgroundColor: '#f8f9fa'
      }}>
        <Row className="justify-content-center align-items-center p-5" style={{ height: '100%' }}>
          <Col xs={12} md={12} lg={12} style={{ 
            padding: '3rem', 
            backgroundColor: '#ffffff', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            height: 'auto', 
            overflowY: 'auto',
            marginTop: '100px'
          }}>
            <h2 className='mb-5' style={{ textAlign: 'center', color: '#1D3758' }}>Accessibility Policy</h2>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>1. Introduction</h3>
            <p>
              Welcome to JobSearch. We are committed to ensuring that our website is accessible to all users, including those with disabilities. This Accessibility Policy outlines our commitment to accessibility and the measures we have taken to improve accessibility on our website.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>2. Accessibility Standards</h3>
            <p>
              We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines are designed to ensure that web content is accessible to a wide range of people with disabilities, including those who use assistive technologies.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>3. Accessible Features</h3>
            <p>Our website includes the following features to improve accessibility:</p>
            <ul>
              <li>Alternative Text: We provide descriptive alt text for images to assist screen readers.</li>
              <li>Keyboard Navigation: Our website can be navigated using keyboard shortcuts.</li>
              <li>Text Resizing: Users can adjust text size for better readability.</li>
              <li>Contrast and Color: We ensure sufficient contrast between text and background colors.</li>
              <li>Accessible Forms: Forms on our site are designed to be accessible with clear labels and error messages.</li>
            </ul>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>4. Feedback and Assistance</h3>
            <p>
              We welcome feedback on the accessibility of our website. If you encounter any issues or need assistance, please contact us. We will make every effort to address your concerns and improve accessibility.
            </p>
            <div className='mt-4'>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>5. Ongoing Efforts</h3>
            <p>
              We are continuously working to improve the accessibility of our website. This includes regular reviews and updates to ensure that we meet or exceed accessibility standards.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>6. Changes to This Accessibility Policy</h3>
            <p>
              We may update this Accessibility Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>7. Contact Us</h3>
            <p>If you have any questions or concerns about this Accessibility Policy, please contact us at:</p>
            <div className='mt-4'>
                  <p>123 Main Street</p>
                  <p>Anytown, State 12345</p>
                  <p>Email: contact@example.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
          </Col>
        </Row>
      </Container>
  
  )
}

export default Accessibility