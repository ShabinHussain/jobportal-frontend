import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import { deletejobApi, postedApi } from '../../services/allApi';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import Advertise from './Advertise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




function Empprf({ user3 }) {
  const [clickid, setClickId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [result2, setResult2] = useState([]);
  const advertiseRef = useRef(null);

  const postedJobs = async () => {
    const result1 = await postedApi();
    const result4 = result1.data.filter(usr => usr.username === user3);
    setResult2(result4);
  };

  const deletejob = async (id) => {
    const result5 = await deletejobApi(id);
    console.log(result5);
    postedJobs();
  };

  const getclickId = (id) => {
    console.log(id);
    setClickId(id);
  };

  const scrollToAdvertise = () => {
    advertiseRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    postedJobs();
  }, [user3]);

  return (
    <Container fluid className="p-4">
      <Row>
        <Col xs={12}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Title className='mb-4'>Employer</Card.Title>
                <a href="#advertise" onClick={scrollToAdvertise} className='text-decoration-none'>Click here to advertise your job
                <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
              <Card.Text>
                <h2 className='text-center mb-4'>Posted Jobs</h2>
                <div className='table-responsive'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Posted Date</th>
                        <th>Job Title</th>
                        <th>City</th>
                        <th>Job Type</th>
                        <th>Pay</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result2.length > 0 ? (
                        result2.map((item) => (
                          <tr key={item.id}>
                            <td>{item.posteddate}</td>
                            <td>{item.jobtitle}</td>
                            <td>{item.city}</td>
                            <td>{item.jobtype}</td>
                            <td>{item.pay}</td>
                            <td>
                              <Button variant='danger' onClick={() => deletejob(item.id)} className='me-5'>Delete</Button>
                              <Button variant='primary'  onClick={() => { setModalShow(true); getclickId(item.id) }}>Response</Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className='text-center'>No jobs posted</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
                <div ref={advertiseRef}>
                  <Advertise postedJobs={postedJobs} user3={user3} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <MyVerticallyCenteredModal
        show={modalShow}
        login={user3}
        showid={clickid}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default Empprf;
