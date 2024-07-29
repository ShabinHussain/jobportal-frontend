import React from 'react'
import { Carousel } from 'react-bootstrap'

function Testimonials() {
  return (
    <Carousel className='testimonial hg1' interval={5000} controls={true} indicators={true}>
    <Carousel.Item>
      <div className="text-center px-5">
        <img
          src="https://t4.ftcdn.net/jpg/06/01/02/71/360_F_601027181_JYZAvwl48pCllc8936XsGOLOGhSY09aV.jpg"
          alt="Jane Smith"
          style={{ borderRadius: '50%', width: '230px', height: '150px', marginBottom: '15px' }}
        />
        <div>
          <h5 className='fs-4'>Jane Smith</h5>
          <p className="mt-4 fs-5" style={{ margin: 0 }}>Marketing Manager, Another Co</p>
          <p className='mt-3 fs-6' style={{ fontStyle: 'italic', margin: 0 }}>
            LinkedIn was instrumental in helping me secure my new job as a Software Engineer. The personalized job recommendations and extensive networking opportunities made my job search efficient and successful.
          </p>
        </div>
      </div>
    </Carousel.Item>
</Carousel>
  )
}

export default Testimonials