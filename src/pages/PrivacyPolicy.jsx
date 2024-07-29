import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function PrivacyPolicy() {
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
            overflowY: 'auto' ,
             marginTop:'100px'
          }}>
            <h2 className='mb-5' style={{ textAlign: 'center', color: '#1D3758' }}>Privacy Policy</h2>
           
  
            <h3 className='mt-4' style={{ color: '#4C596A' }}>1. Introduction</h3>
            <p>
              Welcome to JobSearch . We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.
            </p>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>2. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong>
                <ul>
                  <li>Contact Information: Name, email address, phone number, etc.</li>
                  <li>Account Information: Username, password, etc.</li>
                  <li>Resume Details: Skills, experience, qualifications, etc.</li>
                  <li>Application Information: Details related to job applications, including cover letters and references.</li>
                </ul>
              </li>
              <li><strong>Usage Information:</strong>
                <ul>
                  <li>Website Activity: IP address, browser type, pages visited, and other usage data.</li>
                </ul>
              </li>
              <li><strong>Cookies and Tracking Technologies:</strong>
                <ul>
                  <li>We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content.</li>
                </ul>
              </li>
            </ul>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>3. How We Use Your Information</h3>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>Account Management: To create, maintain, and manage your account.</li>
              <li>Job Applications: To facilitate job applications and match you with job opportunities.</li>
              <li>Communication: To send updates, notifications, and promotional materials.</li>
              <li>Analytics: To analyze usage trends and improve our services.</li>
              <li>Legal Compliance: To comply with legal obligations and enforce our policies.</li>
            </ul>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>4. How We Share Your Information</h3>
            <p>We may share your information with:</p>
            <ul>
              <li>Employers: To provide your details as part of job applications and recruitment processes.</li>
              <li>Service Providers: Third-party vendors who assist us in operating our website and services.</li>
              <li>Legal Authorities: When required by law or to protect our rights and interests.</li>
            </ul>
  
            <h3 style={{ color: '#4C596A' }}>5. Data Security</h3>
            <p>
              We implement reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
            </p>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>6. Your Rights</h3>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>Access: You can request access to your personal information.</li>
              <li>Correction: You can request corrections to inaccurate or incomplete information.</li>
              <li>Deletion: You can request the deletion of your personal information under certain conditions.</li>
              <li>Opt-Out: You can opt-out of receiving promotional communications.</li>
            </ul>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>7. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
            </p>
  
            <h3 style={{ color: '#4C596A' }}>8. Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className='mt-4'>
                  <p>123 Main Street</p>
                  <p>Anytown, State 12345</p>
                  <p>Email: contact@example.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
  
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>9. Third-Party Links</h3>
            <p>
              Our website may contain links to other websites. We are not responsible for the privacy practices or the content of such third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
  
           
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>11. International Data Transfers</h3>
            <p>
              Your information may be transferred to and maintained on servers located outside of your country. By using our services, you consent to the transfer of your information to other countries where the data protection laws may differ from those in your jurisdiction.
            </p>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>12. Data Retention</h3>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
            </p>
  
            <h3 className='mt-4'  style={{ color: '#4C596A' }}>13. Terms of Use</h3>
            <p>
              Your use of our website and services is also governed by our Terms of Use. Please review the Terms of Use for more information.
            </p>
          </Col>
        </Row>
      </Container>
  )
}

export default PrivacyPolicy