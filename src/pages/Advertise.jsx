
import React, { useEffect, useState } from 'react';
import '../pages/empcss.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { advertiseApi } from '../../services/allApi';

function Advertise({ postedJobs, user3 }) {
  const [advertisejobs, setAdvertiseJobs] = useState({
    cname: "",
    jobtitle: "",
    city: "",
    address: "",
    jobtype: "",
    pay: "",
    lastdate: "",
    username: user3,
    posteddate:"",
    description:""
  });

  const handleSubmit = () => {
    setAdvertiseJobs({
      cname: "",
      jobtitle: "",
      city: "",
      address: "",
      jobtype: "",
      pay: "",
      lastdate: "",
      username: user3,
      posteddate:"",
      description:""
    });
  };

  const submitJob = async (e) => {
    e.preventDefault();

    const { cname, jobtitle, city, address, jobtype, pay, lastdate, posteddate, description } = advertisejobs;

    if (!cname || !jobtitle || !city || !address || !jobtype || !pay || !lastdate || !posteddate || !description) {
      alert('Please fill in all fields.');
    } else {
      const data = {
        cname,
        jobtitle,
        city,
        address,
        jobtype,
        pay,
        lastdate,
        username: user3,
        posteddate,
        description
      };
      console.log(data);
      const result = await advertiseApi(data);
      console.log(result);
      postedJobs();
      alert('Job posted successfully!');
      handleSubmit();
    }
  };

  return (
    <div className="m-auto p-4 mt-3 rounded shadow" style={{ maxWidth: '80%', height: 'auto' }}>
      <div className="row">
        <div className="col-12 text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="No image" style={{ maxWidth: '80px', height: '80px' }} />
          <p className='text-center text-dark'><b>Post a job</b></p>
        </div>

        <form onSubmit={submitJob}>
      <Row className='mt-4'>
        <Col sm={12} md={6}>
          <label htmlFor="cname" className='d-block'>Company Name</label>
          <input
            type="text"
            id="cname"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.cname}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, cname: e.target.value })}
          />
        </Col>
        <Col sm={12} md={6}>
          <label htmlFor="jobtitle" className='d-block'>Job Title</label>
          <input
            type="text"
            id="jobtitle"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.jobtitle}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtitle: e.target.value })}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={12} md={6}>
          <label htmlFor="city" className='d-block'>City</label>
          <input
            type="text"
            id="city"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.city}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, city: e.target.value })}
          />
        </Col>
        <Col sm={12} md={6}>
          <label htmlFor="address" className='d-block'>Address</label>
          <input
            type="text"
            id="address"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.address}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, address: e.target.value })}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={12} md={6}>
          <label htmlFor="jobtype" className='d-block'>Job Type</label>
          <input
            type="text"
            id="jobtype"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.jobtype}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtype: e.target.value })}
          />
        </Col>
        <Col sm={12} md={6}>
          <label htmlFor="pay" className='d-block'>Pay</label>
          <input
            type="text"
            id="pay"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.pay}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, pay: e.target.value })}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={12} md={6}>
          <label htmlFor="lastdate" className='d-block'>Last Date to Apply</label>
          <input
            type="date"
            id="lastdate"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.lastdate}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, lastdate: e.target.value })}
          />
        </Col>
        <Col sm={12} md={6}>
          <label htmlFor="posteddate" className='d-block'>Posted Date</label>
          <input
            type="date"
            id="posteddate"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.posteddate}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, posteddate: e.target.value })}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={12}>
          <label htmlFor="description" className='d-block'>Description</label>
          <textarea
            id="description"
            className='mt-2 shadow p-2 w-100 rounded'
            value={advertisejobs.description}
            onChange={(e) => setAdvertiseJobs({ ...advertisejobs, description: e.target.value })}
          />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm={12} className=' d-flex justify-content-center align-items-center'>
          <button type='submit' className='mt-3 bg-success text-white rounded shadow' style={{ width: '100px', height: '40px' }}>Post</button>
        </Col>
      </Row>
    </form>
      </div>
    </div>
  );
}

export default Advertise;
