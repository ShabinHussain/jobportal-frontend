import React from 'react'
import {  Row,Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';




function CandidateAlertCard() {
    const jobAlerts = [
        { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA', alertDate: '14/07/2024' },
        { id: 2, title: 'Front-End Developer', company: 'Web Solutions', location: 'Los Angeles, CA', alertDate: '13/07/2024' },
        { id: 3, title: 'UX Designer', company: 'Design Studio', location: 'New York, NY', alertDate: '12/07/2024' },
        { id: 4, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA', alertDate: '14/07/2024' },
        { id: 5, title: 'Front-End Developer', company: 'Web Solutions', location: 'Los Angeles, CA', alertDate: '13/07/2024' },
        { id: 6, title: 'UX Designer', company: 'Design Studio', location: 'New York, NY', alertDate: '12/07/2024' },
        { id: 7, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA', alertDate: '14/07/2024' },
        { id: 8, title: 'Front-End Developer', company: 'Web Solutions', location: 'Los Angeles, CA', alertDate: '13/07/2024' },
        { id: 9, title: 'UX Designer', company: 'Design Studio', location: 'New York, NY', alertDate: '12/07/2024' }
    ];

    return (
   
  
        <Row>
        <h2 className="jobsection mt-5 text-center mb-5" style={{ color: '#0E5784' }}>Job Alerts</h2>
        <Row className="jobsection mt-3">
            <Table className='p-3 rounded-5 shadow '>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company Name</th>
                        <th>Alert Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobAlerts.map(alert => (
                        <tr key={alert.id}>
                            <td>{alert.title}</td>
                            <td>{alert.company}</td>
                            <td>{alert.alertDate}</td>
                            <td>
                                <Button variant="primary" className="me-2"><FontAwesomeIcon icon={faEye} /></Button>
                                <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Row>
    </Row>
        
    )
}

export default CandidateAlertCard


