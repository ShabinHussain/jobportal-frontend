import React from 'react';
import Card1 from './Card1';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Going() {
  return (
    <>
      <div className='shadow rounded m-auto mt-5 p-3' style={{maxWidth: '1100px'}}>
        <h1 className='text-center text-primary pt-5'>What's Going On?</h1>
        <div className="row">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <Card1 />
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <Card style={{ width: '100%', height: '100%' }} className='shadow crd1'>
              <Card.Img variant="top" src="/4.jpg" />
              <Card.Body>
                <Card.Title className='mt-2'>PublicJobs.com</Card.Title>
                <Button variant="primary" className='rounded mt-3'>
                  <FontAwesomeIcon icon={faArrowRight} size='2xl' />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card style={{ width: '100%', height: '100%' }} className='shadow crd1'>
              <Card.Img variant="top" src="/3.jpg" />
              <Card.Body>
                <Card.Title>Construction Recruitment <br />and Training</Card.Title>
                <Button variant="primary" className='rounded mt-3'>
                  <FontAwesomeIcon icon={faArrowRight} size='2xl' />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row text-end mt-5">
          <div className="col-12">
            <h6 className='text-primary'>View More <FontAwesomeIcon icon={faArrowRight} style={{color: "#74C0FC"}} size='xl' /></h6>
          </div>
        </div>
      </div>

      <div className='shadow rounded bg-primary mt-5 m-auto p-3' style={{maxWidth: '1100px'}}>
        <h1 className='text-white text-center pt-5'>Follow Us</h1>
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <iframe src="https://www.facebook.com/" style={{height: '300px', width: '100%'}} title="Facebook" className='w-100'></iframe>
          </div>
          <div className="col-12 col-md-6">
            <iframe src="https://x.com/?lang=en" style={{height: '300px', width: '100%'}} title="X" className='w-100'></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Going;
