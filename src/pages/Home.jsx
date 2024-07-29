import React , {useState,useEffect} from 'react';
import '../pages/home.css';
import Search from '../components/Search';

import Employer from '../components/Employer';
import Going from '../components/Going';
import { Link } from 'react-router-dom';
import { Button,Row,Col,Card,Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { postedApi } from '../../services/allApi';




function Home() {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      const result = await postedApi();
      setJobs(result.data);
    };
    fetchPostedJobs();
  }, []);
  return (
    <>
     
      <div className='hero-section'>
        <section className='hero-content text-white'>
          <h1>Our Mission</h1>
          <p><b>At JobSearch, we aim to help people get jobs and <br /> help employers connect with the right people.</b></p>
          <p>Whether you're looking for your next job or finding the right person <br /> to join your team, JobSearch can help you.</p>
        </section>
      </div>

      
      <div className="search">
        <div className="search-overlay d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <div className="row">
            
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                <h1 className="text-white">
                  A job isn't just a job. It's who you are.
                </h1>
              </div>
             
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-white mb-4">Search Job</h2>
                <Link to="/searchjobs">
                  <Button variant="primary" className="p-3 rounded">
                    <FontAwesomeIcon icon={faArrowRight} color='white' size='2xl' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <section className='opportunities-section'>
        <h1 className='text-center text-primary mt-5'>Top Jobs</h1>
        <h5 className='text-center text-info'>We have 10247 available opportunities</h5>
      </section>
         

     <Row>
      
     <Row fluid className="p-4">
     
     {jobs.slice(0, visibleJobs).map((job, index) => (
          <Col key={index} md={4} className="mb-5">
            <Card className="shadow ms-4" style={{ borderRadius: '10px' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid #3076DA'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent'; 
              }}>
              <Card.Body key={job.id}>
                <div className='d-flex justify-content-between align-items-center px-1 py-1'>
                  <div>
                    <p className='jobpara mb-0 pb-3'>Posted Date:<strong> {job.lastdate}</strong></p>
                    <p className='jobpara mb-0 pb-3'>Closing Date: <strong>{job.posteddate}</strong></p>
                  </div>
                  <p className='jobpara px-2 py-1 rounded' style={{ backgroundColor: '#C3D5EF' }}>{job.jobtype}</p>
                </div>
                <div className='d-flex flex-column align-items-center mt-5'>
                  <Card.Subtitle className="mb-2" style={{ fontSize: '18px', fontWeight: 'bold', color: '#0E5784' }}>Company : {job.cname}</Card.Subtitle>
                  <Card.Title style={{ fontSize: '25px', fontWeight: 'bold', color: '#007bff' }}>{job.jobtitle}</Card.Title>
                  <h6>Location: {job.city}</h6>
                  <Button href='/login' className='mt-3' style={{ borderRadius: '20px', backgroundColor: '#007BFF' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#007BFF';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.backgroundColor = '#007bff';
                    }}>
                    Apply Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     <div className="text-center">
               <Button  href='/login' >View More</Button>
             </div>
   
      
     </Row>
      

      
      <Employer />
      <Going />
      <style>{`


.hero-section {
  width: 100%;
  height: 700px; 
  background-image: url('./src/assets/img2.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  display: flex;
  align-items: center; 
  justify-content: center; 
}

.hero-content {
  max-width: 1200px;
  text-align: center;
  padding: 20px;
  color: white;
}


.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}


.search {
  width: 100%;
  height: 350px; 
  background-image: url('https://blog.gmat.com/hubfs/Year%20in%20Review%20Blog_Hero.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  position: relative; 
  margin-top: -10px; 
}

.search-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
}

.search .container {
  max-width: 1200px;
  padding: 20px;
}


@media (max-width: 768px) {
  .search .container {
    padding: 10px;
  }

  .search h1 {
    font-size: 1.5rem;
  }

  .search h2 {
    font-size: 1.2rem;
  }
}


.opportunities-section {
  padding: 20px;
}

.opportunities-section h3 {
  font-size: 1.5rem;
}


@media (max-width: 768px) {
  .opportunities-section h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .hero-content {
    padding: 10px;
  }
}

  @media (max-width: 768px) {
       .jobpara{
       font-size:14px
       }
      }
`}</style>
    </>
  );
}

export default Home;
