

import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

function Jobprf({ login, appliedJobsList, appliedJobsList2 }) {
    return (
        <Container fluid className="p-4" >
            <Row style={{marginTop:'100px'}}>
                <Col xs={12}>
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h1 className='text-center mb-5 mt-5'>Applied Jobs</h1>
                            <div className='table-responsive'>
                                <Table striped bordered hover>
                                    <thead className='table-secondary'>
                                        <tr >
                                            <th className='p-4'>Job Title</th>
                                            <th className='p-4'>Company Name</th>
                                            <th className='p-4'>Job Location</th>
                                            <th className='p-4'>Job Type</th>
                                            <th className='p-4'>Pay</th>
                                            <th className='p-4'>Closing Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appliedJobsList.map((item) => (
                                                <tr key={item.id}>
                                                    <td className='p-2'>{item.jobtitle}</td>
                                                    <td className='p-2'>{item.cname}</td>
                                                    <td className='p-2'>{item.address}</td>
                                                    <td className='p-2'>{item.jobtype}</td>
                                                    <td className='p-2'>{item.pay}</td>
                                                    <td className='p-2'>{item.lastdate}</td>
                                                </tr>
                                            ))}
                                       
                                        { 
                                            appliedJobsList2.map((item) => (
                                                <tr key={item.id}>
                                                    <td className='p-2'>{item.jobtitle}</td>
                                                    <td className='p-2'>{item.cname}</td>
                                                    <td className='p-2'>{item.address}</td>
                                                    <td className='p-2'>{item.jobtype}</td>
                                                    <td className='p-2'>{item.pay}</td>
                                                    <td className='p-2'>{item.lastdate}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Jobprf;
