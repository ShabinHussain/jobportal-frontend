import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinearGradient, RadialGradient } from 'react-text-gradients'

import { faBriefcase, faNewspaper, faLightbulb, faUsers,  faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function JobSeekerPage() {
  return (
    <Container fluid className="p-4" style={{ overflowX: 'hidden' }}>
       <div  style={{ marginTop: '100px' }}>
       <h1 className='fw-bolder text-center pt-5 '><LinearGradient gradient={['to left', '#1A3F70 ,#8DDDF9 ']}>
             What's going on?

            </LinearGradient></h1> 
      <Row className="main mb-1 align-items-center py-5 " >
        
       
        <Col md={4} className="mb-4 ">
          <Card style={{ height: '200px', boxShadow: '0 6px 10px #6591CB ' }}>
            <Card.Header className="text-white fw-bolder" style={{ backgroundColor: '#5A7FAF' }}>
              <FontAwesomeIcon icon={faBriefcase} /> Featured Jobs
            </Card.Header>
            <Card.Body>
              <Card.Title>Software Engineer, Marketing Manager...</Card.Title>
              <Card.Text>
                Browse through featured job openings tailored for you. Discover opportunities that match your skills and
                interests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={4} className="mb-4">
          <Card style={{ height: '200px', boxShadow: '0 6px 10px #6591CB ' }}>
            <Card.Header className="text-white fw-bolder" style={{ backgroundColor: '#5A7FAF' }}>
              <FontAwesomeIcon icon={faNewspaper} /> Job Market Insights
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroupItem>Explore industries that are currently hiring.</ListGroupItem>
              <ListGroupItem>Discover the skills that are in high demand.</ListGroupItem>
              <ListGroupItem>Stay updated on current salary trends.</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>

     
        <Col md={4} className="mb-4">
          <Card style={{ height: '200px' , boxShadow: '0 6px 10px #6591CB '}}>
            <Card.Header className="text-white fw-bolder" style={{ backgroundColor: '#5A7FAF' }}>
              <FontAwesomeIcon icon={faLightbulb} /> Career Tips
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroupItem>Tips for writing a standout resume.</ListGroupItem>
              <ListGroupItem>Strategies for successful interview preparation.</ListGroupItem>
              <ListGroupItem>Effective networking tips and strategies.</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 py-4">
       
        <Col md={6} className="mb-4">
          <Card style={{ height: '200px', boxShadow: '0 6px 10px #6591CB ' }}>
            <Card.Header className="text-white fw-bolder" style={{ backgroundColor: '#5A7FAF' }}>
              <FontAwesomeIcon icon={faUsers} /> Featured Companies
            </Card.Header>
            <Card.Body>
              <Card.Title>Google, Microsoft, Apple...</Card.Title>
              <Card.Text>
                Explore opportunities at leading companies known for their innovation and growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={6} className="mb-4">
          <Card style={{ height: '200px', boxShadow: '0 6px 10px #6591CB ' }}>
            <Card.Header className="text-white fw-bolder" style={{ backgroundColor: '#5A7FAF' }}>
              <FontAwesomeIcon icon={faCheckCircle} /> Success Stories
            </Card.Header>
            <Card.Body>
              <Card.Title>John Doe, Marketing Director</Card.Title>
              <Card.Text>
                Read inspiring success stories from professionals who found their dream jobs through ManyJobs.com.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
       </div>
    </Container>
  );
}

export default JobSeekerPage;
