import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function CookiesPolicy() {
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
            <h2 className='mb-5' style={{ textAlign: 'center', color: '#1D3758' }}>Cookie Policy</h2>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>1. Introduction</h3>
            <p>
              Welcome to JobSearch . This Cookie Policy explains how we use cookies and similar technologies to enhance your experience on our website and to provide personalized content.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>2. What Are Cookies?</h3>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>3. How We Use Cookies</h3>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be turned off. They are used to provide core functionalities like security and network management.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make (such as your username) and provide enhanced features.</li>
              <li><strong>Targeting Cookies:</strong> These cookies are used to deliver advertisements that are more relevant to you and your interests. They may be set by us or by third-party providers whose services we use.</li>
            </ul>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>4. Managing Cookies</h3>
            <p>
              You can manage cookies through your browser settings. Most web browsers allow you to control cookies through their settings preferences. You can choose to accept or refuse cookies or to be notified when a cookie is being sent. However, if you disable cookies, some features of our website may not function properly.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>5. Third-Party Cookies</h3>
            <p>
              Our website may also use third-party cookies, which are set by external services we use for analytics, advertising, and other purposes. These cookies are subject to the third parties' privacy policies.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>6. Changes to This Cookie Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>7. Contact Us</h3>
            <p>If you have any questions or concerns about this Cookie Policy, please contact us at:</p>
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

export default CookiesPolicy