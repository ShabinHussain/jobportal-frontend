

import React from 'react';
import { Row, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

function EmployerManageCard() {
    const jobRequests = [
        { id: 1, title: 'Software Engineer', applicant: 'John Doe', requestDate: '14/07/2024' },
        { id: 2, title: 'Front-End Developer', applicant: 'Jane Smith', requestDate: '13/07/2024' },
        { id: 3, title: 'UX Designer', applicant: 'Michael Brown', requestDate: '12/07/2024' },
        { id: 4, title: 'Backend Developer', applicant: 'Alice Green', requestDate: '14/07/2024' },
        { id: 5, title: 'Product Manager', applicant: 'Chris Johnson', requestDate: '13/07/2024' },
        { id: 6, title: 'QA Engineer', applicant: 'Patricia Williams', requestDate: '12/07/2024' },
        { id: 7, title: 'Data Scientist', applicant: 'James Wilson', requestDate: '14/07/2024' },
        { id: 8, title: 'Mobile Developer', applicant: 'Jennifer Davis', requestDate: '13/07/2024' },
        { id: 9, title: 'System Administrator', applicant: 'Robert Garcia', requestDate: '12/07/2024' }
    ];

    return (
        <Row>
            <h2 className="jobsection mt-5 text-center mb-5" style={{ color: '#0E5784' }}>Candidate Requests</h2>
            <Row className="jobsection mt-3">
                <Table className='p-3 rounded-5 shadow'>
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Applicant Name</th>
                            <th>Request Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobRequests.map(request => (
                            <tr key={request.id}>
                                <td>{request.title}</td>
                                <td>{request.applicant}</td>
                                <td>{request.requestDate}</td>
                                <td>
                                    <Button variant="primary" className="me-2"><FontAwesomeIcon icon={faEye} /></Button>
                                    <Button variant="success"><FontAwesomeIcon icon={faTrash} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Row>
    );
}

export default EmployerManageCard;
