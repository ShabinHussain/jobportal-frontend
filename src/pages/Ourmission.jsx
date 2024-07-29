import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinearGradient } from 'react-text-gradients';
import ourmission from '../assets/ourmission.jpg'
import missionjoin from '../assets/missionjoin.jpg'
import '../pages/empcss.css'


function Ourmission() {
  return (
    <Container fluid className="p-4" style={{ overflowX: 'hidden' }}>
      <Row style={{ marginTop: '150px' }}>

        <Col md={6}><p className="d-flex flex-column justify-content-center align-items-center ">

          <h1 className='fw-bolder mt-5 '><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
            Our Mission
          </LinearGradient></h1>

          <p className='mt-3 p-5 text-justify'>At <strong>JobSearch</strong>, our mission is to empower job seekers by providing innovative tools and resources that enhance their career journeys. We are dedicated to connecting talent with opportunity, fostering a supportive environment where individuals can thrive professionally and personally.</p>
        </p></Col>
        <Col md={6} className="text-center">
          <img src={ourmission} alt="Our Mission" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 6px 10px #082A4F' }}
          />
        </Col>


        <h2 className="mt-4 pt-5 text-center mb-5"><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>Core Values </LinearGradient></h2>
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center hover-card mt-4 hg1">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className='text-primary'>Empowerment</Card.Title>
                <Card.Text >
                  We believe in empowering individuals with the skills and knowledge needed to navigate their career paths confidently.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center  hover-card mt-4 hg1">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className='text-primary'>Integrity</Card.Title>
                <Card.Text>
                  We are committed to maintaining transparency and honesty in all our interactions, ensuring trust in our relationships with job seekers and employers alike.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center hover-card mt-4 hg1">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className='text-primary'>Inclusivity</Card.Title>
                <Card.Text>
                  We strive to create an inclusive platform that welcomes diverse backgrounds and experiences, promoting equal opportunities for all.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center hover-card mt-4 hg1">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className='text-primary'>Innovation</Card.Title>
                <Card.Text>
                  Our focus on continuous improvement drives us to innovate, offering cutting-edge solutions that simplify the job search process and enhance user experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-4 pt-5 text-center mb-5"><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>Our Commitment </LinearGradient></h2>
        <ul className='mb-4 custom-list hg1'>
          <li className='list-item'>
            <span className='bullet'></span>
            <p><strong>Connecting Talent with Opportunity:</strong> Partnering with employers to match qualified candidates with fulfilling roles that align with their career goals.</p>
          </li>
          <li className='list-item'>
            <span className='bullet'></span>
            <p><strong>Fostering Community:</strong> Creating a supportive network where job seekers can share experiences, insights, and encouragement.</p>
          </li>
          <li className='list-item'>
            <span className='bullet'></span>
            <p><strong>User-Centric Approach:</strong> Our platform is designed with user feedback in mind, continually evolving to meet the needs of job seekers and employers.</p>
          </li>
          <li className='list-item'>
            <span className='bullet'></span>
            <p><strong>Commitment to Diversity:</strong> We actively promote diversity in the workplace and strive to provide equal access to opportunities for all job seekers.</p>
          </li>
          <li className='list-item'>
            <span className='bullet'></span>
            <p><strong>Building Lasting Relationships:</strong> We focus on developing long-term partnerships with both candidates and employers to foster a thriving job marketplace.</p>
          </li>
        </ul>

        <h2 className="mt-4 pt-5 text-center mb-5"><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>Join Our Community </LinearGradient></h2>

        <Col md={6} className="mt-2 p-2">
          <img src={missionjoin} alt="Join us" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 6px 10px #082A4F' }} // 
          />
        </Col>
        <Col md={6} className="mt-2 p-3">
          <p className="paragraph mt-4" style={{ textAlign: 'justify' }}>
            Whether you're looking for your next opportunity or seeking guidance in your career, <strong>JobSearch</strong> is here to support you every step of the way. Together, let’s unlock the doors to your future success.
          </p>


          <p className="details" style={{ textAlign: 'justify' }}>
            At <strong>JobSearch</strong>, we believe in empowering job seekers with the tools and resources they need to succeed. Our mission is to provide a comprehensive support system that includes personalized coaching, industry insights, and a vibrant community.
          </p>



          <p className="details" style={{ textAlign: 'justify' }}>
            By joining us, you gain access to a network of professionals and peers who are committed to helping you succeed. Let's navigate the job market together!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="button btn  btn-primary d-flex justify-content-center">Join Now</button>
          </div>
        </Col>
      </Row>
      <style>{`
      
 .hover-card {
  transition: transform 0.3s ease;
  height: 100%; 
  will-change: transform; 
}

.hover-card:hover {
  transform: scale(1.05); 
}


.hover-card {
  box-shadow: 0 4px 8px rgba(44, 74, 113, 0.5);
}
  


.custom-list {
  margin-left: 20px;
  padding-left: 0;
  list-style-type: none; 
}

.list-item {
  position: relative;
  margin-bottom: 15px;
  padding-left: 30px; 
  background-color: white; 
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s;
}

.list-item:hover {
  transform: scale(1.02); 
}

.list-item p {
  margin-left: 20px;
  margin-top: 15px;
}

.bullet {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%; 
  background-color: #007bff; 
  margin-right: 15px; 
}

.list-item strong {
  color: #333; 
  font-weight: bold; 
}


@media (max-width: 768px) {
  .custom-list {
    margin-left: 10px; 
  }

  .list-item {
    padding-left: 20px; 
  }

  .bullet {
    display: none; 
  }

  .list-item p {
    margin-left: 0; 
  }
}

@media (max-width: 480px) {
  .custom-list {
    margin-left: 5px; 
  }

  .list-item {
    padding: 8px; 
  }

  .list-item p {
    margin-left: 0;
  }
}

`}</style>
    </Container>

  );
}

export default Ourmission;



