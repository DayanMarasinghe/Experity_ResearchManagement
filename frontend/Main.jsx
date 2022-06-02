import React from 'react';
import { Route, BrowserRouter as Router, Switch, Routes } from "react-router-dom";
import UserLogin from './components/userLogin';
import SupervisorDashboard from './components/supervisor-view/supervisorDashboard';
import Footer from './components/shared/footer';
import Header from './components/shared/header';
import StudentReg from './components/studentRegister';
import StaffReg from './components/staffRegister';
import UserReg from './components/userRegister';
import StudentDashboard from './components/student/studentDashboard/studentDashboard'
import StudentHeader from './components/student/header/studentHeader';
import TopicRegistration from './components/student/topicRegistration/TopicRegistration';
import ResearchResources from './components/student/researchResources/researchResources';
import DocumentSubmission from './components/student/documentSubmission/DocumentSubmission';
import 'bootstrap/dist/css/bootstrap.min.css';

import PMDashboard from './components/panelmember-view/pmDashboard';
import PmPresentation from './components/panelmember-view/pmPrstEvaluation'
import PmTopic from './components/panelmember-view/pmTopicEval'

import 'react-dropzone-uploader/dist/styles.css'
import GroupView from './components/supervisor-view/groupview';
import AddEvaluation from './components/supervisor-view/addEvaluation';
import AcceptTopic from './components/supervisor-view/acceptTopic';



export default class App extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <Routes>
                        <Route path='/supervisordashboard' element={<SupervisorDashboard />} />
                        <Route path='/userlogin' element={<UserLogin />} />
                        <Route path='/studentreg' element={<StudentReg/>}/>
                        <Route path='/userreg' element={<UserReg/>}/>
                        <Route path='/staffreg' element={<StaffReg/>}/>
                        <Route path='/group' element={<GroupView />} />
                        <Route path='/studentdashboard' element={<StudentDashboard/>}/>
                        <Route path='/studentheader' element={<StudentHeader/>}/>
                        <Route path='/topicregister' element={<TopicRegistration/>}/>
                        <Route path='/researchresources' element={<ResearchResources/>}/>

                        <Route path='/pmdashboard' element={<PMDashboard/>}/>
                        <Route path='/pmevalgrpid' element={<PmPresentation/>}/>
                        <Route path='/pmtopiceval' element={<PmTopic/>}/>

                        <Route path='/documentsubmit' element={<DocumentSubmission/>}/>
                        <Route path='/addevaluation' element={<AddEvaluation />} />
                        <Route path='/accepttopic' element={<AcceptTopic />} />


                    </Routes>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }
}
   