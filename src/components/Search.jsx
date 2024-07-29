import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/search.css';

const backgroundImageUrl = 'https://blog.gmat.com/hubfs/Year%20in%20Review%20Blog_Hero.png';

function Search() {
  return (
    <div 
      className="position-relative w-100"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '350px', // Adjust height as needed
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        }}
      >
        <div 
          className="container text-center"
          style={{
            maxWidth: '1200px',
            padding: '20px',
          }}
        >
          <div className="row">
            {/* First Column */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
              <h1 className="text-white" style={{ fontSize: '2rem' }}>
                A job isn't just a job. It's who you are.
              </h1>
            </div>
            {/* Second Column */}
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

      <style>{`.position-relative {
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-center h1 {
    font-size: 1.5rem; /* Smaller font size for smaller screens */
  }
}

@media (max-width: 576px) {
  .text-center h1 {
    font-size: 1.2rem; /* Even smaller font size for very small screens */
  }
}
`}</style>
    </div>
  );
}

export default Search;
