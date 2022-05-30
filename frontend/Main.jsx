import React from 'react';
import { Route, BrowserRouter as Router, Switch, Routes } from "react-router-dom";
import SupervisorDashboard from './components/supervisorDashboard';
import UserLogin from './components/userLogin';
import Header from './components/shared/header';
import StudentReg from './components/studentRegister';
import StaffReg from './components/staffRegister';
import UserReg from './components/userRegister';
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
                    </Routes>
                </Router>
            </div>
        );
    }
}
   