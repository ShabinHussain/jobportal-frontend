import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



//api to register employer account
export const registerApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/employers`,reqBody,"")
}

//api to login employer account
export const loginApi = async()=>{
    return await commonApi('GET',`${serverUrl}/employers`,"")
}


//api to advertise employer jobs
export const advertiseApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/jobs`,reqBody,"")
}

//api to show employer posted jobs in employer profile
export const postedApi = async()=>{
    return await commonApi('GET',`${serverUrl}/jobs`,"")
}

//delete posted job
export const deletejobApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/jobs/${id}`,{})

}

//api to show jobs in home
export const showjobsApi = async()=>{
    return await commonApi('GET',`${serverUrl}/jobs`,"")
}

//api to register jobseeker account 
export const jobseekerregApi = async (reqBody)=>{
  return await commonApi('POST',`${serverUrl}/jobseekers`,reqBody,"")
}

//api to login jobseeker account
export const jobseekerlogApi = async()=>{
    return await commonApi('GET',`${serverUrl}/jobseekers`,"")
}

//api to apply jobs(to store applied job to server)
//1
export const appliedjobsApi = async(reqBody) =>{
   return await commonApi('POST',`${serverUrl}/appliedjobs`,reqBody,"")
}
//2
export const appliedjobsApi2 = async(reqBody) =>{
    return await commonApi('POST',`${serverUrl}/appliedjobs2`,reqBody,"")
 }


//api to show applied jobs 
//1
export const showappliedApi = async()=>{
    return await commonApi('GET',`${serverUrl}/appliedjobs`,"")
}
//2
export const showappliedApi2 = async()=>{
    return await commonApi('GET',`${serverUrl}/appliedjobs2`,"")
}




