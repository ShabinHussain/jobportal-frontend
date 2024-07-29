
import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

import EmployerManageCard from '../components/EmployerManageCard';

function ManageJobs() {
  return (
    <Container fluid className="p-4">
            <Row>
                <Col xs={12} md={3} style={{ marginTop: '100px' }}>
                    <Card style={{ width: '100%', marginTop: '20px' }} className="shadow-sm">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile" />
                        <Card.Body>
                            <Card.Title className='mb-4'>John Smith</Card.Title>
                            <Card.Text>
                                <p><strong className='mt-5'>Company:</strong> Tech Innovations<br /></p>
                                <p><strong className='mt-5'>Email:</strong> john.smith@techinnovations.com<br /></p>
                                <p><strong className='mt-5'>Location:</strong> San Francisco, CA<br /></p>
                                <p><strong className='mt-5'>Experience:</strong> 10 years in Technology Management</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={9} style={{ padding: '20px', marginTop: '80px' }}>
                    <EmployerManageCard />
                </Col>
            </Row>
        </Container>
  )
}

export default ManageJobs