import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../components/employer.css';
import { Link } from 'react-router-dom';

function Employer() {
  return (
    <>
      <div className='rounded shadow mx-auto my-5 p-4' style={{ maxWidth: '900px', height: 'auto' }}>
        <div className="row align-items-center">
          <div className="col-12 col-md-9 text-center text-md-start">
            <h1 className='text-primary'>Are you an employer?</h1>
            <h2 className='text-primary'>Advertise your job for free now</h2>
          </div>
          <div className="col-12 col-md-3 text-center text-md-end mt-4 mt-md-0">
            <button type='button' className='rounded bg-primary p-3'>
             <Link to='/login'> <FontAwesomeIcon  icon={faArrowRight} style={{ color: "#74C0FC" }} size='xl' /></Link>
            </button>
          </div>
        </div>
      </div>

      <div className='rounded shadow mx-auto my-5 p-4 sc3' style={{ maxWidth: '1100px', height: 'auto' }}>
        <div className="row text-white text-center">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h2 className='sc4'>250,000+</h2>
            <h3>Matches per annum</h3>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h2 className='sc4'>126</h2>
            <h3>Local offices</h3>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h2 className='sc4'>24/7</h2>
            <h3>Access to job</h3>
          </div>
          <div className="col-12 col-md-3">
            <h2 className='sc4'>31</h2>
            <h3>EU/EEA Countries</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employer;
