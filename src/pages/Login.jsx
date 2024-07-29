import React from 'react';
import '../pages/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='lg1 pt-5'>
        <h1 className='text-center mt-5'>Choose how to access the portal</h1>

        <div className='rounded shadow m-auto mt-5' style={{ maxWidth: '700px', height: 'auto', padding: '20px' }}>
          <div className='row pt-4'>
            <div className='col-md-6'>
              <div className='shadow rounded p-3'>
                <div className='row text-center pt-4'>
                  <h2>Employer</h2>
                </div>
                <div className='row text-center'>
                  <img src='public/employer.png' alt='Employer' className='rounded' />
                </div>
                <div className='row text-center '>
                  <button type='button' className='rounded p-2 mt-3 bg-success'>
                    <Link to='/emplogin' className='text-decoration-none text-white'>
                      Login
                      <FontAwesomeIcon icon={faArrowRight} size='lg' />
                    </Link>
                  </button>
                </div>
                <div className='row text-center mt-2'>
                  <p>or</p>
                </div>
                <div className='row text-center'>
                  <button type='button' className='rounded p-2 bg-success'>
                    <Link to='/empregister' className='text-decoration-none text-white'>
                      Register
                      <FontAwesomeIcon icon={faArrowRight} size='lg' />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='shadow rounded p-3'>
                <div className='row text-center pt-4'>
                  <h2>Jobseeker</h2>
                </div>
                <div className='row text-center'>
                  <img src='public/jobseekerregister.png' alt='Jobseeker' className='rounded' />
                </div>
                <div className='row text-center'>
                  <button type='button' className='rounded p-2 mt-3 bg-success'>
                    <Link to='/joblogin' className='text-decoration-none text-white'>
                      Login
                      <FontAwesomeIcon icon={faArrowRight} size='lg' />
                    </Link>
                  </button>
                </div>
                <div className='row text-center mt-2'>
                  <p>or</p>
                </div>
                <div className='row text-center'>
                  <button type='button' className='rounded p-2 bg-success'>
                    <Link to='/jobregister' className='text-decoration-none text-white'>
                      Register
                      <FontAwesomeIcon icon={faArrowRight} size='lg' />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 576px) {
    button {
        margin-left: 70px;
    }
}
        `}
      </style>
    </>
  );
}

export default Login;

