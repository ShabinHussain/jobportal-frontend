


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';
import '../pages/frequently.css';
import { Container } from 'react-bootstrap';


function Frequently() {
  const [open, setOpen] = useState(false);
  const [opena, setOpena] = useState(false);
  const [openb, setOpenb] = useState(false);
  const [openc, setOpenc] = useState(false);
  const [opend, setOpend] = useState(false);
  const [opene, setOpene] = useState(false);
  const [openg, setOpeng] = useState(false);
  const [openh, setOpenh] = useState(false);
  const [openi, setOpeni] = useState(false);
  const [openj, setOpenj] = useState(false);
  const [openk, setOpenk] = useState(false);
  const [openl, setOpenl] = useState(false);
  const [openm, setOpenm] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [openeo, setOpeneo] = useState(false);
  const [openp, setOpenep] = useState(false);
  const [openeq, setOpenq] = useState(false);
  const [opener, setOpener] = useState(false);

  return (
    <Container fluid className="p-4" style={{ overflowX: 'hidden' }}>
    <div className='container-fluid' >
      <h1 style={{marginTop:'100px'}}>Jobseeker Frequently Asked Questions</h1>

      <div className='question' >
        <div className='question-header'>
          <h5>How do I search for a job on JobSearch?</h5>
          <button onClick={() => setOpen(!open)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={open}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>

      <div className='question'>
        <div className='question-header'>
          <h5>Where can I find information about looking for a job?</h5>
          <button onClick={() => setOpena(!opena)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>

    

      <div className='question'>
        <div className='question-header'>
          <h5>Why do I see MyGovID on my login screen – is it safe?</h5>
          <button onClick={() => setOpenb(!openb)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
   
      <div className='question'>
        <div className='question-header'>
          <h5>Why do I see MyGovID on my login screen – is it safe?</h5>
          <button onClick={() => setOpenc(!openc)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      
      <div className='question'>
        <div className='question-header'>
          <h5>Can I see the jobs I have applied for?</h5>
          <button onClick={() => setOpend(!opend)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Can I see the jobs I have applied for?</h5>
          <button onClick={() => setOpene(!opene)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Do I have to complete all the fields on my jobseeker profile to apply for a job?</h5>
          <button onClick={() => setOpeng(!openg)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>What is job matching?</h5>
          <button onClick={() => setOpenh(!openh)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Do I have to complete all the fields on my jobseeker profile to use job matching?</h5>
          <button onClick={() => setOpeni(!openi)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Can I switch off matching of my profile to jobs?</h5>
          <button onClick={() => setOpenj(!openj)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Can I use matching but not show my name and contact details?</h5>
          <button onClick={() => setOpenk(!openk)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Will I get notifications of suitable jobs from JobSearch?</h5>
          <button onClick={() => setOpenl(!openl)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Why do I see jobs that are located far away from my location?</h5>
          <button onClick={() => setOpenm(!openm)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Where can I get help with registering or using the site?</h5>
          <button onClick={() => setOpenn(!openn)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>How do I complete the MyGovID information?</h5>
          <button onClick={() => setOpeneo(!openeo)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>How do I get help completing my jobseeker profile?</h5>
          <button onClick={() => setOpenep(!openp)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Why can’t I upload my CV to my profile?</h5>
          <button onClick={() => setOpenq(!openeq)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>
      <div className='question'>
        <div className='question-header'>
          <h5>Why am I seeing a message in red text on my profile?</h5>
          <button onClick={() => setOpener(!opener)} className='btn'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <Collapse in={opena}>
          <div>
            <p className='mt-3'>There are a number of ways:</p>
            <ul>
              <li>Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
              <li>  Click on a job displayed on the Top Jobs Today to see the details.</li>
              <li>Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
            </ul>
          </div>
        </Collapse>
      </div>

     <style>{`.freq-container {
  margin: 20px;
}

.freq-container h1 {
  text-align: center;
}

.question {
  margin-top: 20px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.question-header h5 {
  margin: 0;
  flex-grow: 1;
}

.btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .freq-container {
    margin: 10px;
  }

  .question {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
  }

  .question-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    align-self: flex-end;
  }
}
`}</style>
      
    </div>
    </Container>
  );
}

export default Frequently;
