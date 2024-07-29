import { faArrowRight, faCalendarDays, faCalendarXmark, faHeart, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../components/jobdisplay.css'
import { showjobsApi } from '../../services/allApi'
import { Link } from 'react-router-dom'







function Jobdisplay() {
    const[jobs,setJobs] = useState([])

    const toshowjobs = async() =>{
        const result = await showjobsApi()
        console.log(result);
        const jobs = result.data
        console.log(jobs);
        setJobs(jobs)
        

    }

    useEffect(()=>{
       toshowjobs()
    },[])
  return (
    <>
    <div className=' mt-2' style={{width:'100%'}}>
        {jobs?.length> 0 ?

        jobs.map((item)=>(<div className="row  border">
    <div className="col-md-1">
    <img src="https://cdn-icons-png.flaticon.com/512/3688/3688609.png" alt="no image" style={{width:'60px'}}/>
     </div>
     <div className="col-md-7">
    <div className="row">
        <p>{item.jobtitle}</p>
    </div>
    <div className="row">
        <div className="col-md-6 fs1">
            <div className="row">
            <p><FontAwesomeIcon icon={faLink} /> Company:{item.cname}</p>
            </div>
            <div className="row">
                <p><FontAwesomeIcon icon={faCalendarDays} />Published On: 18 Jul 2024</p>
            </div>
        </div>
        <div className="col-md-6 fs1">
            <div className="row">
                <p><FontAwesomeIcon icon={faLocationDot} />{item.address}</p>
            </div>
            <div className="row">
                <p><FontAwesomeIcon icon={faCalendarXmark} />Closing On: {item.lastdate}</p>
            </div>
        </div>
    </div>
    </div>
  
    <div className="col-md-4">
   
    <div className="row ms1">
    <p className='text-danger'>Please login to apply</p>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-7">
            <Link to={'/joblogin'}><button className='bg-primary rounded p-1 text-white px-2'>Login</button></Link>
        </div>
        <div className="col-md-2"></div>

    </div>

    </div>
    </div>
        </div>))


       :
       <p>No jobs to display</p>

        }

    </div>
    </>
  )
}

export default Jobdisplay