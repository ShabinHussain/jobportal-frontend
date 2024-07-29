import React from 'react'
import { Link } from 'react-router-dom'


function Response() {
  return (
    <>
    <div className=' lg1' style={{width:'1536px', height:'800px'}}>
      <h1 className='text-center'>Response</h1>
      <div className='rounded shadow m-auto' style={{width:'1200px',height:'550px'}}>
        <div className="row">
          <div className="col-md-12">
            <h2 className='text-center'>Details of careerseekers applied for this job</h2>
            <div className="row">
               <div className="col-md-3">
                <p>Name:</p>
                <p>Raju</p>
               </div>
               <div className="col-md-3">
                <p>Email:</p>
                <p>raju@gmail.com</p>
               </div>
               <div className="col-md-3">
                <p>Mobile:</p>
                <p>96545</p>
               </div>
               <div className="col-md-3">
                <p>Profile link:</p>
                <p><Link>gbdhjnhfjgf</Link></p>
               </div>
            </div>
          </div>
          
        </div>

      </div>

    </div>
    </>
  )
}

export default Response





