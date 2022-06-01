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
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <Route path='/studentdashboard' element={<StudentDashboard/>}/>
                        <Route path='/studentheader' element={<StudentHeader/>}/>
                        <Route path='/topicregister' element={<TopicRegistration/>}/>
                        <Route path='/researchresources' element={<ResearchResources/>}/>
                    </Routes>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }
}
   