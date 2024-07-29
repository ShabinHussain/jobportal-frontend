import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import CandidateSavedCards from '../components/CandidateSavedCards';



function CandidateSavedJobs() {
  return (
    <Container fluid className="p-4">
    <Row>
        <Col xs={12} md={3} style={{ marginTop: '100px' }}>
            <Card style={{ width: '100%', marginTop: '20px' }} className="shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile" />
                <Card.Body>
                    <Card.Title className='mb-4'>Jane Doe</Card.Title>
                    <Card.Text>
                       <p> <strong className='mt-5'>Email:</strong> jane.doe@example.com<br /></p>
                      <p><strong className='mt-5'>Location:</strong> San Francisco, CA<br /></p>
                      <p><strong className='mt-5'>Experience:</strong> 3 years in UI/UX Design</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={9} style={{ padding: '20px', marginTop: '80px' }} >
           <CandidateSavedCards/>
        </Col>
    </Row>
</Container>
  )
}

export default CandidateSavedJobs