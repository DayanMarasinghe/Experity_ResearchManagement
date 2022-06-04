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
import ResearchResources from './components/student/researchResources/ResearchResources';
import DocumentSubmission from './components/student/documentSubmission/DocumentSubmission';

import AdminUSDash from './components/adminUserDashboard';
import AdminDashbo from './components/adminMarkinDashboard';
import AdminGroups from './components/admingroups';
import Submission from './components/createsubmission';
import Viewsubmission from './components/viewsubmission';
import Addashboard from './components/admindash';




import 'bootstrap/dist/css/bootstrap.min.css';

import PMDashboard from './components/panelmember-view/pmDashboard';
import PmPresentation from './components/panelmember-view/pmPrstEvaluation';
import PmTopic from './components/panelmember-view/pmTopicEval';
import GroupView from './components/supervisor-view/groupview';
import AddEvaluation from './components/supervisor-view/addEvaluation';
import AcceptTopic from './components/supervisor-view/acceptTopic';
import MarkingSchemeView from './components/supervisor-view/markingScheme';
import GroupChat from './components/student/groupChat/GroupChat';
import RequestSupervisors from './components/student/requestSupervisors/RequestSupervisors';
import ViewDocument from './components/student/viewDocuments/ViewDocument';
import SubmittedDocs from './components/supervisor-view/submittedDoc';



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
                        <Route exact path='/' element={<UserLogin />} />
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
                        <Route path='/markingSchemes' element={<MarkingSchemeView />} />
                        <Route path='/creategroups' element={<GroupChat />} />
                        <Route path='/requestsupervisor' element={<RequestSupervisors />} />


                        <Route path='/adminUSdashboard' element={<AdminUSDash/>}/>
                        <Route path='/adminmarkingshboard' element={<AdminDashbo/>}/>
                        <Route path='/adminGroup' element={<AdminGroups/>}/>
                        <Route path='/submission' element={<Submission/>}/>

                        <Route path='/viewsubmission' element={<Viewsubmission/>}/>
                        <Route path='/addash' element={<Addashboard/>}/>
                        
                        
                        
                        


                        <Route path='/viewdocument' element={<ViewDocument />} />
                       <Route path='/studentdocs' element={<SubmittedDocs />} />


                    </Routes>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }
}
   