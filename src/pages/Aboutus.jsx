import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { LinearGradient, RadialGradient } from 'react-text-gradients'
import registeredImg from '../assets/registeredImg.png'
import Testimonials from '../components/Testimonials';


function Aboutus() {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up quickly using your email.",
    },

    {
      title: "Search for Jobs",
      description: "Use keywords, location, and filters to find jobs that match your preferences.",
    },
    {
      title: "Apply for Jobs",
      description: "Apply directly with a click and attach your resume and cover letter.",
    },
    {
      title: "Get a Job",
      description: "Find the perfect job that fits your skills and aspirations.",

    }


  ];

  return (
    <>
      <Container fluid className="p-4" style={{ overflowX: 'hidden' }}>





        <Row className="main mb-1 align-items-center " style={{ marginTop: '100px' }}>
          <Col md={6} className="text-center md-px-5  " >
            <h1 className='fw-bolder mt-3 '><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
              Unlock your Dream Career with JobSearch
            </LinearGradient></h1>

            <p className='mt-5' style={{ fontSize: '20px', color: '#6c757d', textAlign: 'justify' }}>
              We make it easy to find your dream job - regardless of your location . Browse over 100,00 jobs from top companies to fast growing start-ups
            </p>

            <Button variant="outline-light" style={{ borderRadius: '20px', background: '#2174CD ', color: 'white' }} className='mt-3'>Get Started</Button>

          </Col>
          <Col md={6} className="d-flex justify-content-center  mt-5 hg1" style={{ height: '500px' }}>
            <div style={{ position: 'relative', marginTop: '80px', paddingRight: '50px' }}>
              <img className="img-fluid" src="https://thumbs.dreamstime.com/b/corporate-business-team-manager-meeting-close-up-corporate-business-team-manager-meeting-131960975.jpg" alt="Job Search" style={{
                width: '250px', height: '250px', borderRadius: '10px', margin: '0 10px', boxShadow: '0 6px 10px #082A4F', animation: 'moveUpLeft 4s ease-in-out forwards ', position: 'relative',
                zIndex: 2
              }}
              />
              <img className="img-fluid" src="https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=dojtkf9ItX21j3jtlGOGpbKDs320TTAuofoGnNSZD8Y=" alt="Career Growth" style={{
                width: '250px', height: '250px', borderRadius: '10px', margin: '0 10px', position: 'absolute', top: '100px', left: '50px', boxShadow: '0 4px 8px #082A4F', animation: 'moveDownRight 4s ease-in-out forwards ', zIndex: 1,
              }}
              />
            </div>
          </Col>
        </Row>






        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img className='ms-5' src={registeredImg} alt="Placeholder" style={{ width: '100%', height: '600px', borderRadius: '10px', marginBottom: '20px' }}
            />
          </Col>
          <Col xs={12} md={6} className="registeredcontent d-flex flex-column justify-content-center align-items-center ">



            <RadialGradient gradient={['#0D2E5B ,#0D2E5B, #C4D8F2  ,#B7D0F1']}><h3 className='fs-2 text-center mb-4' style={{ margin: '10px 0' }}>Over all 10,00+ Talented People Registered in Our Website</h3></RadialGradient>

            <p style={{ color: '#555', textAlign: 'center', textAlign: 'justify' }}>
              We are proud to have over 10,000 talented individuals registered on our platform! Our diverse community brings together professionals from various fields, each contributing unique skills and expertise. Whether you’re looking to network, collaborate on projects, or find your next opportunity, our website serves as a vibrant hub for connecting with top talent. Join us today and be part of this dynamic community!
            </p>
            <Button className='mt-3' variant="primary" style={{ padding: '10px 20px', borderRadius: '5px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Join Now
            </Button>
          </Col>
        </Row>






        <Row className="mt-5 mb-5">
          <h2 className="text-center mb-4" style={{ color: '#0E5784' }}>How It Works</h2>
          <Row className="g-4 justify-content-center hg1">
            {steps.map((step, index) => (
              <Col key={index} md={6} lg={3}>
                <div className="card-container ms-5 border rounded-5">
                  <div className="overlay" />

                  <Card className="text-center d-flex flex-column justify-content-center" style={{
                    height: '200px',
                    boxShadow: '0 6px 10px #99CEEF',

                  }}>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                      <Card.Title className="fw-bold" style={{ color: '#0E5784' }}>{step.title}</Card.Title>
                      <Card.Text>{step.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Row>



        <h2 className="text-center  mb-4 mt-4" style={{ color: '#0E5784' }}>What Our Users Say</h2>
        <Row className='mt-5 mb-5'>
          <Testimonials />
        </Row>


        <style>{`

.card {
background-color: transparent; 
transition: background-color 0.5s ease; 
}
.card-container {
position: relative;
width: 250px;
height: 200px;
overflow: hidden;
}

.overlay {
position: absolute;
top: -100%; 
left: 0;
width: 100%;
height: 100%;
background-color: #99C1F8; 
transition: top 0.5s ease;
}

.card-container:hover .overlay {
top: 0; 
}
@keyframes moveUpLeft {
  0% { transform: translate(0, 0); }
  15% { transform: translate(0, -50px); }
  30% { transform: translate(-50px, -50px); }
  45% { transform: translate(-50px, 0); }
  60% { transform: translate(0, 0); }
  80% { transform: translate(0, -50px); }
  100% { transform: translate(-50px, -50px); }
}
@keyframes moveDownRight {
 0% { transform: translate(0, 0); }
  15% { transform: translate(0, 50px); }
  30% { transform: translate(50px, 50px); }
  45% { transform: translate(50px, 0); }
  60% { transform: translate(0, 0); }
  80% { transform: translate(0, 50px); }
  100% { transform: translate(50px, 50px); }
}
  @media (min-width: 768px) {
 .main {
 padding-left:100px
}

 .testimonial{
 padding:0px 200px;
 }
 .registeredcontent{
 padding-right:100px;
 }
}

@media (min-width: 768px) {
 Container {

 
}
}

`}</style>




      </Container>
    </>
  )
}

export default Aboutus