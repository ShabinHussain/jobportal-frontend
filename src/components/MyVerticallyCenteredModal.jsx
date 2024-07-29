import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { jobseekerlogApi, showappliedApi, showappliedApi2 } from '../../services/allApi';

function MyVerticallyCenteredModal(props) {
    const[res,setRes] =useState([])
    const[showj,setShowJ]= useState(false)
    
    console.log(props.login);
    console.log(props.showid); //job id
    console.log(res);


    const jobresponse = async()=>{
        const result = await showappliedApi()
        console.log(result);
        const result1 = result.data.filter(cpny => cpny.username == props.login)
        console.log(result1);
        const result2 = await showappliedApi2()
        const result3 = result2.data.filter(cpny1 => cpny1.username == props.login)
        console.log(result3);

        const result4 = result1.concat(result3)
        console.log(result4);
        


       const result5 = result4.filter(flt => flt.id === props.showid)
        console.log(result5);

       // const jobseeker = await jobseekerlogApi()
       // console.log(jobseeker.data);

      //  const result6 = result5.map(un => un.uname)
       // console.log(result6);

      // const jjb = jobseeker.data.filter(ddt => ddt.uname === result6)
       //console.log(jjb);


       // if((result4.filter(cpny => cpny.username == props.login)) && (result4.filter(flt => flt.id === props.showid))){
           // alert('applied')
           // console.log('applied ');
            
       // }
         if(result4.find(flt => flt.id === props.showid)){
           
            console.log(' applied');
            
            setRes(result5)
            setShowJ(true)
        }
        else if(result4.find(flt => flt.id !== props.showid)){
            console.log('not applied');
           
            setShowJ(false)



            
        }
       
        

      
    }

    const closing = ()=>{
        setShowJ(false)

    }
   

   

    

  



    useEffect(()=>{
      setShowJ(false)
      
    },[])
   
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Details of jobseekers applied for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-md-4">Name:</div>
            <div className="col-md-4">Email:</div>
            <div className="col-md-4">Phone:</div>
        </div>
        {showj && (<div>
         {res?.map((item)=>(<div className="row">
            <div className="col-md-4">{item.name}</div>
            <div className="col-md-4">{item.email}</div>
            <div className="col-md-4">{item.phone}</div>
        </div>))
       
       }

        </div>)}
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closing}><Button onClick={props.onHide} >Close</Button></Button>
        <Button> <Button onClick={jobresponse}>Response</Button></Button>

      </Modal.Footer>
    </Modal></>
  )
}

export default MyVerticallyCenteredModal