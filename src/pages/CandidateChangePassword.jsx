import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function CandidateChangePassword() {
    return (
        <Container fluid className="p-4">
            <Row >
                <Col xs={12} md={3} style={{ marginTop: '100px' }}>
                    <Card style={{ width: '100%', marginTop: '20px' }} className="shadow-sm">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile" />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text>
                                <strong>Email:</strong> john.doe@example.com<br />
                                <strong>Location:</strong> New York, NY<br />
                                <strong>Experience:</strong> 5 years in Software Development
                            </Card.Text>
                            <Button variant="primary">Edit Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    xs={12} md={9}
                    className="d-flex align-items-center justify-content-center"
                    style={{ padding: '20px', marginTop: '80px' }}
                >
                    <Col xs={12} md={8}>
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title className="text-center fs-3 mb-3" style={{ color: '#007bff' }}>Change Password</Card.Title>
                                <Card.Text className="text-center mb-4 mt-3" style={{ color: '#6c757d' }}>
                                    Ensure your account is secure by regularly updating your password.
                                </Card.Text>
                                <Form>
                                    <Form.Group controlId="currentPassword" className="mb-3">
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter current password"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="newPassword" className="mb-3">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter new password"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="confirmPassword" className="mb-3">
                                        <Form.Label>Confirm New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm new password"
                                            required
                                        />
                                    </Form.Group>
                                    
                                   <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                   <Button type="submit" className="w-50" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                                        Change Password
                                    </Button>
                                   </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default CandidateChangePassword;
