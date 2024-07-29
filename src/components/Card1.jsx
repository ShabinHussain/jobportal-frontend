import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../components/card1.css'


function Card1() {
  return (
    <>
    <Card style={{ width: '300px',height:'350px' }} className='shadow crd1'>
      <Card.Img variant="top" src="public/2.jpg" />
      <Card.Body>
        <Card.Title>Engagement and Youth <br /> Engagement Charter</Card.Title>
     
        <Button variant="primary" className='rounded mt-3'><FontAwesomeIcon icon={faArrowRight} size='2xl'/></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Card1