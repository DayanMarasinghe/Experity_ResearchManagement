import React from 'react';
import { Route, BrowserRouter as Router, Switch, Routes } from "react-router-dom";
import SupervisorDashboard from './components/supervisor-view/supervisorDashboard'
import Header from './components/shared/header';
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
                    </Routes>
                </Router>
            </div>
        );
    }
}
   