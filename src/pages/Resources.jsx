import React from 'react';
import '../pages/resources.css';

function Resources() {
  return (
    <div className='container-fluid rsrcs'>
      <h1 className='ms-5 ' style={{marginTop:'100px'}}>More Resources</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="resource-list rounded shadow p-3">
            <p>Jobseeker Frequently Asked Questions</p>
            <p>What's going on?</p>
            <p>Citizensinformation.ie</p>
            <p>Irish National Organisation of the Unemployed (INOU)</p>
            <p>Money Advice and Budgeting Service (MABS)</p>
            <p>QQI Qualifications Recognition Service (NARIC) Ukrainian Language</p>
            <p>National Journey Planner</p>
            <p>Follow us on social media</p>
            <p>JobsWeek</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="resource-details rounded shadow p-3 ps-4">
            <img
              src="https://missioncontinuity.upenn.edu/sites/default/files/inline-images/MCP_Resources%20.jpg"
              alt="Resources"
              className="img-fluid"
            />
            <h5 className='mt-5'>This page tells you about more resources available to jobseekers:</h5>
            <h6>Frequently Asked Questions</h6>
            <h6>What's going on?</h6>
            <p>Find out what's going on with JobsIreland and the Intreo service including upcoming recruitment days, nationwide campaigns, training opportunities and other public employment services events.</p>
            <h6>Citizensinformation.ie</h6>
            <p>Citizensinformation.ie provides information and advice on a wide range of public and social services and on your entitlements as a citizen of Ireland. They gather information from various government departments and agencies, so that you have all the information you need about your rights and applying for State services.</p>
            <h6>Irish National Organisation of the Unemployed (INOU)</h6>
            <p>The Irish National Organisation of the Unemployed provides detailed information on back to work, education and training supports for unemployed people, others in receipt of social welfare payments and front-line staff providing services to Jobseekers.</p>
            <p>Their main publication, Working for Work explores welfare, work, education and training options for unemployed people and staff supporting unemployed people.</p>
            <p>JobsWatch lists information on job announcements.</p>
            <h6>Money Advice and Budgeting Service (MABS)</h6>
            <p>MABS provides detailed advice on managing your debts. It can advise you on your options during negotiations with creditors such as banks or mortgage providers, including repayment options. It can also give you information on what to do if you are behind on your rent.</p>
            <h6>QQI Qualifications Recognition Service (NARIC) Ukrainian Language</h6>
            <p>QQI's free online NARIC service provides information on over 1,400 foreign qualifications from more than 150 countries.</p>
            <p>The NARIC database currently lists 14 Ukrainian qualifications that are comparable to Irish awards from Levels 3-10 of the National Framework of Qualifications, including school-based qualifications, professional and higher education qualifications.</p>
            <p>You can access a guide to the NARIC Service in Ukrainian here.</p>
            <h6>National Journey Planner</h6>
            <p>The National Journey Planner gives you information to let you plan any journey in Ireland, including journeys on foot and by public transport.</p>
            <h6>Follow us on social media</h6>
            <p>JobsIreland, the Department of Employment Affairs and Social Protection and the EURES Ireland services all have social media accounts you can follow across a variety of digital media platforms. Follow them here:</p>
            <p>Twitter: JobsIreland DSP Eures Ireland</p>
            <p>LinkedIn: JobsIreland DSP</p>
            <p>Facebook: JobsIreland Eures Ireland</p>
            <p>Instagram: JobsIreland DSP</p>
            <h6>JobsWeek</h6>
            <p>The aim of JobsWeek is to showcase the Intreo supports and services available to employers and jobseekers and to bring them together through a number of recruitment events, seminars, information sessions and workshops. During the week there are approximately 120 events bringing together an estimated 15,000 people to help them achieve their career goals. Most of these are open events but some require pre-registration. Some events are tailored to meet the needs of specific groups of jobseekers.</p>
          </div>
        </div>
      </div>
      <style>{`.rsrcs {
  padding: 20px;
}

.resource-list {
  background-color: #f8f9fa;
}

.resource-details {
  background-color: #fff;
}

@media (max-width: 768px) {
  .rsrcs {
    padding: 10px;
  }

  .resource-list {
    margin: 0;
    padding: 15px;
  }

  .resource-details {
    padding: 15px;
  }

  .resource-details img {
    width: 100%;
    height: auto;
  }
}
`}</style>
    </div>
  );
}

export default Resources;
