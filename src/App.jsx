
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchJob from './pages/SearchJob'
import TipsAndAdvice from './pages/TipsAndAdvice'
import Login from './pages/Login'
import Emplogin from './pages/Emplogin'
import Joblogin from './pages/Joblogin'
import Empregister from './pages/Empregister'
import Jobregister from './pages/Jobregister'
import Advertise from './pages/Advertise'
import Empprf from './pages/Empprf'
import Jobprf from './pages/Jobprf'
import Response from './pages/Response'
import Aboutus from './pages/Aboutus'
import Ourmission from './pages/Ourmission'
import Contactus from './pages/Contactus'
import Whatsgoingon from './pages/Whatsgoingon'
import CandidateChangePassword from './pages/CandidateChangePassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import Accessibility from './pages/Accessibility'
import TermsandCondition from './pages/TermsandCondition'
import Frequently from './pages/Frequently'
import Resources from './pages/Resources'
import CandidateJobAlert from './pages/CandidateJobAlert'
import CandidateSavedJobs from './pages/CandidateSavedJobs'
import ManageJobs from './pages/ManageJobs'
import EmployerChangePassword from './pages/EmployerChangePassword'










function App() {

  return (
    
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/searchjobs' element={<SearchJob/>}/>
      <Route path='/tips' element={<TipsAndAdvice/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/emplogin' element={<Emplogin/>}/>
      <Route path='/joblogin' element={<Joblogin/>}/>
      <Route path='/empregister' element={<Empregister/>}/>
      <Route path='/jobregister' element={<Jobregister/>}/>
      <Route path='/advertise' element={<Advertise/>}/>
      <Route path='/empprf' element={<Empprf/>}/>
      <Route path='/jobprf' element={<Jobprf/>}/>
      <Route path='/response' element={<Response/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/ourmission' element={<Ourmission/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/whatsgoingon' element={<Whatsgoingon/>}/>
      <Route path='/candidatechangepassword' element={<CandidateChangePassword/>}/>
      <Route path='/legalinformationp' element={<PrivacyPolicy/>}/>
      <Route path='/legalinformationc' element={<CookiesPolicy/>}/>
      <Route path='/legalinformationa' element={<Accessibility/>}/>
      <Route path='/legalinformationt' element={<TermsandCondition/>}/>
      <Route path='/frequently' element={<Frequently/>}/>
      <Route path='/resource' element={<Resources/>}/>
      <Route path='/candidatejobalerts' element={<CandidateJobAlert/>}/>
      <Route path='/candidatesavedjobs' element={<CandidateSavedJobs/>}/>  
      <Route path='/managejobs' element={<ManageJobs/>}/>
      <Route path='/employerchangepassword' element={<EmployerChangePassword/>}/>



    </Routes>


   <Footer/>
  

   
    </>
  )
}

export default App
