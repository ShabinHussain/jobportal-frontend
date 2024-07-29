import React, { useEffect, useState } from 'react';
import Jobdisplay from '../components/Jobdisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { showjobsApi } from '../../services/allApi';

function SearchJob() {
  const [jobs, setJobs] = useState([]);
  const [searchjobs, setSearchJobs] = useState({
    cmpny: "",
    city: "",
    jobtype: "",
    jobtitle: "",
    salary: "",
    sector: ""
  });

  const showjobs = async () => {
    const { cmpny, city, jobtype, jobtitle, salary, sector } = searchjobs;
    const result = await showjobsApi();
    const jobs1 = result.data;
    setJobs(jobs1);
  };

  useEffect(() => {
    showjobs();
  }, [searchjobs]);

  return (
    <>
      <div className='search-job-container d-flex flex-column align-items-center pt-5'>
        <div className='search-box rounded shadow srr2'>
          <h6 className='text-center fs-3 pt-4 text-primary'>Search for your next job</h6>
          <div className="row mt-4 justify-content-center">
            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Company</p>
              <input
                type="text"
                placeholder='Tcs, Wipro etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, cmpny: e.target.value })}
              />
            </div>

            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Location</p>
              <input
                type="text"
                placeholder='Bangalore, Kochi etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, city: e.target.value })}
              />
            </div>

            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Job Type</p>
              <input
                type="text"
                placeholder='Permanent, Full-time etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, jobtype: e.target.value })}
              />
            </div>

            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Job Title</p>
              <input
                type="text"
                placeholder='Software, Web Developer etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, jobtitle: e.target.value })}
              />
            </div>

            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Salary</p>
              <input
                type="text"
                placeholder='150000, 200000 etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, salary: e.target.value })}
              />
            </div>

            <div className="col-md-12 col-lg-6 mb-3">
              <p className='text-primary'>Sector</p>
              <input
                type="text"
                placeholder='Private, Public etc.'
                className='shadow rounded border-0 p-3 w-100'
                onChange={(e) => setSearchJobs({ ...searchjobs, sector: e.target.value })}
              />
            </div>

            <div className="col-12 text-center">
              <button className='btn btn-primary'>
                <FontAwesomeIcon icon={faArrowRight} color='white' size='2xl' />
              </button>
            </div>
          </div>
        </div>

        <div className='job-list-container shadow rounded mt-5 mb-5'>
          <h1 className='text-primary text-center'>{jobs.length} jobs found</h1>

          <div className="row mt-5 justify-content-center">
            <div className="col-md-12 d-flex flex-wrap justify-content-center">
              <p className='rounded border text-center shadow bg-success p-1 m-1'>ALL</p>
              <p className='rounded border text-center shadow bg-success p-1 m-1'>PAID POSITION</p>
              <p className='rounded border text-center shadow bg-success p-1 m-1'>APPRENTICESHIP</p>
              <p className='rounded border text-center shadow bg-success p-1 m-1'>SELF EMPLOYED</p>
              <p className='rounded border text-center shadow bg-success p-1 m-1'>CE SCHEME</p>
            </div>
          </div>

          <div className='job-display-container mt-5'>
            {jobs.length > 0 ? (
              <div className="row justify-content-center">
                <Jobdisplay />
              </div>
            ) : (
              <p className='text-center'>No jobs to display</p>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          .search-job-container {
            max-width: 1200px;
            width: 100%;
            padding: 0 15px;
            margin: 0 auto;
          }

          .search-box {
            width: 100%;
            max-width: 1200px;
            padding: 20px;
            background-color: #fff;
            margin-top:100px;

          }

          .job-list-container {
            width: 100%;
            max-width: 1200px;
            padding: 20px;
            background-color: #fff;
            margin-top: 100px;
          }

          .text-primary {
            color: #007bff; 
          }

          .shadow {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .rounded {
            border-radius: 0.25rem;
          }

          .bg-success {
            background-color: #28a745;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          @media (max-width: 768px) {
            .search-box {
              padding: 15px;
            }

            .search-box input {
              font-size: 0.9rem;
            }

            .search-box button {
              font-size: 1.5rem;
            }

            .job-list-container {
              padding: 15px;
              margin-top: 50px;
            }

            .job-list-container h1 {
              font-size: 1.5rem;
            }

            .job-list-container .p-1 {
              font-size: 0.9rem;
              padding: 0.5rem;
            }
          }

          @media (max-width: 576px) {
            .search-box input {
              font-size: 0.8rem;
            }

            .search-box button {
              font-size: 1.2rem;
            }

            .job-list-container h1 {
              font-size: 1.2rem;
            }

            .job-list-container .p-1 {
              font-size: 0.8rem;
              padding: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default SearchJob;
