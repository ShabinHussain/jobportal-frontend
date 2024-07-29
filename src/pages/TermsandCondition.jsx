import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function TermsandCondition() {
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
            <h2 className='mb-5' style={{ textAlign: 'center', color: '#1D3758' }}>Terms and Conditions</h2>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>1. Introduction</h3>
            <p>
              Welcome to JobSearch. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>2. Use of Our Website</h3>
            <p>
              You agree to use our website and services only for lawful purposes and in accordance with these Terms and Conditions. You must not use our website in any way that may cause damage to the website or interfere with the use of the website by others.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>3. Intellectual Property Rights</h3>
            <p>
              All content on our website, including text, images, logos, and other materials, is the property of [Your Company/Website Name] and is protected by copyright and intellectual property laws. You may not use, reproduce, or distribute any content from our website without our prior written consent.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>4. User Accounts</h3>
            <p>
              To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>5. Limitation of Liability</h3>
            <p>
              To the extent permitted by law, [Your Company/Website Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>6. Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless [Your Company/Website Name], its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our website or services, or your violation of these Terms and Conditions.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>7. Termination</h3>
            <p>
              We reserve the right to terminate or suspend your access to our website and services at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or to [Your Company/Website Name].
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>8. Changes to These Terms</h3>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any significant changes by posting the new terms on our website and updating the effective date. Your continued use of our website and services after such changes constitutes your acceptance of the new terms.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>9. Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
            </p>
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>10. Contact Us</h3>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
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

export default TermsandCondition